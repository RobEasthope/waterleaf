import type {
  ActionFunction,
  LoaderFunctionArgs,
  MetaFunction,
} from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { Record } from '~/components/decommisioning/Record/Record';
import type { Loader as RootLoader } from '~/root';
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from '~/routes/resource.og';
import { client } from '~/sanity/client';
import { isStegaEnabled } from '~/sanity/isStegaEnabled.server';
import { useQuery } from '~/sanity/loader';
import { loadQuery } from '~/sanity/loader.server';
import { RECORD_QUERY } from '~/sanity/queries';
import type { RecordDocument } from '~/types/record';
import { recordZ } from '~/types/record';

export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader;
  }
> = ({ data, matches }) => {
  const rootData = matches.find((match) => match.id === `root`)?.data;
  const home = rootData ? rootData.initial.data : null;
  const title = [data?.initial?.data?.title, home?.siteTitle]
    .filter(Boolean)
    .join(' | ');
  const ogImageUrl = data ? data.ogImageUrl : null;

  return [
    { title },
    { property: 'twitter:card', content: 'summary_large_image' },
    { property: 'twitter:title', content: title },
    { property: 'og:title', content: title },
    { property: 'og:image:width', content: String(OG_IMAGE_WIDTH) },
    { property: 'og:image:height', content: String(OG_IMAGE_HEIGHT) },
    { property: 'og:image', content: ogImageUrl },
  ];
};

// Load the `record` document with this slug
export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const stegaEnabled = isStegaEnabled(request.url);

  const query = RECORD_QUERY;
  // Params from the loader uses the filename
  // $slug.tsx has the params { slug: 'hello-world' }
  const queryParams = params;
  const initial = await loadQuery<RecordDocument>(query, queryParams, {
    perspective: stegaEnabled ? 'previewDrafts' : 'published',
  }).then((res) => ({
    ...res,
    data: res.data ? recordZ.parse(res.data) : null,
  }));

  if (!initial.data) {
    throw new Response('Not found', { status: 404 });
  }

  // Create social share image url
  const { origin } = new URL(request.url);
  const ogImageUrl = `${origin}/resource/og?id=${initial.data._id}`;

  return json({
    initial,
    query,
    params: queryParams,
    ogImageUrl,
  });
};

export default function RecordPage() {
  const { initial, query, params } = useLoaderData<typeof loader>();
  const { data, loading, encodeDataAttribute } = useQuery<typeof initial.data>(
    query,
    params,
    {
      // @ts-expect-error
      initial,
    },
  );

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  return <div>Slug route</div>;
}
