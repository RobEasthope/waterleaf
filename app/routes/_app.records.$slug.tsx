import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useQuery } from "@sanity/react-loader";

import { loadQuery } from "~/components/sanity/loader.server";
import { loadQueryOptions } from "~/components/sanity/loadQueryOptions.server";
import { RECORD_QUERY } from "~/components/sanity/queries";
import type { loader as layoutLoader } from "~/routes/_app";
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from "~/routes/resource.og";
import { type RecordDocument, recordZ } from "~/types/record";

export const meta: MetaFunction<
  typeof loader,
  {
    "routes/_app": typeof layoutLoader;
  }
> = ({ data, matches }) => {
  const layoutData = matches.find((match) => match.id === `routes/_app`)?.data;
  const home = layoutData ? layoutData.initial.data : null;
  const title = [data?.initial?.data?.title, home?.siteTitle]
    .filter(Boolean)
    .join(" | ");
  const ogImageUrl = data ? data.ogImageUrl : null;

  return [
    { title },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: title },
    { property: "og:title", content: title },
    { property: "og:image:width", content: String(OG_IMAGE_WIDTH) },
    { property: "og:image:height", content: String(OG_IMAGE_HEIGHT) },
    { property: "og:image", content: ogImageUrl },
  ];
};

// Load the `record` document with this slug
export const loader = async ({ params, request }: LoaderFunctionArgs) => {
  const { options } = await loadQueryOptions(request.headers);

  const query = RECORD_QUERY;
  const initial = await loadQuery<RecordDocument>(
    query,
    // $slug.tsx has the params { slug: 'hello-world' }
    params,
    options,
  ).then((res) => ({
    ...res,
    data: res.data ? recordZ.parse(res.data) : null,
  }));

  if (!initial.data) {
    throw new Response("Not found", { status: 404 });
  }

  // Create social share image url
  const { origin } = new URL(request.url);
  const ogImageUrl = `${origin}/resource/og?id=${initial.data._id}`;

  return {
    initial,
    query,
    params,
    ogImageUrl,
  };
};

export default function RecordPage() {
  const { initial, query, params } = useLoaderData<typeof loader>();
  const { data } = useQuery<typeof initial.data>(query, params, {
    // There's a TS issue with how initial comes over the wire
    // @ts-expect-error Remix should fix this
    initial,
  });

  return data ? <div>Page data</div> : null;
}
