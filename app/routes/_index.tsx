import type { LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import type { Loader as RootLoader } from '~/root';
import { isStegaEnabled } from '~/sanity/isStegaEnabled.server';
import { useQuery } from '~/sanity/loader';
import { loadQuery } from '~/sanity/loader.server';
import { RECORDS_QUERY } from '~/sanity/queries';
import type { RecordStub } from '~/types/record';
import { recordStubsZ } from '~/types/record';

export const meta: MetaFunction<
  typeof loader,
  {
    root: RootLoader;
  }
> = ({ matches }) => {
  const rootData = matches.find((match) => match.id === `root`)?.data;
  const home = rootData ? rootData.initial.data : null;
  const title = [home?.title, home?.siteTitle].filter(Boolean).join(' | ');

  return [{ title }];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const stegaEnabled = isStegaEnabled(request.url);
  const query = RECORDS_QUERY;
  const queryParams = {};
  const initial = await loadQuery<RecordStub[]>(query, queryParams, {
    perspective: stegaEnabled ? 'previewDrafts' : 'published',
  }).then((res) => ({
    ...res,
    data: res.data ? recordStubsZ.parse(res.data) : null,
  }));

  if (!initial.data) {
    throw new Response('Not found', { status: 404 });
  }

  return json({
    initial,
    query,
    params: queryParams,
  });
};

export default function Index() {
  const { initial, query, params } = useLoaderData<typeof loader>();
  const { data, loading } = useQuery<typeof initial.data>(query, params, {
    // @ts-expect-error Sanity says to just expect the error due the problems of handling types in Sanity datasets after a certain point
    initial,
  });

  if (loading || !data) {
    return <div>Loading...</div>;
  }

  return <div>Home</div>;
}
