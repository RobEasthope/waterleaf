import type { LoaderFunctionArgs } from "@remix-run/node";
import { json, Outlet, useLoaderData, useLocation } from "@remix-run/react";
import { useQuery } from "@sanity/react-loader";
import { VisualEditing } from "@sanity/visual-editing/remix";
import { lazy, Suspense } from "react";

import { Type } from "~/components/base/Type/Type";
import { Footer } from "~/components/navigation/Footer/Footer";
import { Header } from "~/components/navigation/Header/Header";
import { loadQuery } from "~/components/sanity/loader.server";
import { loadQueryOptions } from "~/components/sanity/loadQueryOptions.server";
import { HOME_QUERY } from "~/components/sanity/queries";
import type { HomeDocument } from "~/types/home";
import { homeZ } from "~/types/home";

const SanityLiveMode = lazy(
  () => import("~/components/sanity/components/SanityLiveMode/SanityLiveMode"),
);
const ExitPreview = lazy(
  () => import("~/components/sanity/components/ExitPreview/ExitPreview"),
);

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { preview, options } = await loadQueryOptions(request.headers);

  // Content from Sanity used in the global layout
  const query = HOME_QUERY;
  const params = {};
  const initial = await loadQuery<HomeDocument>(query, params, options).then(
    (res) => ({
      ...res,
      data: res.data ? homeZ.parse(res.data) : undefined,
    }),
  );

  return json({
    initial,
    query,
    params,
    sanity: { preview },
  });
};

export default function Website() {
  const { initial, query, params, sanity } = useLoaderData<typeof loader>();
  const { data: home } = useQuery<typeof initial.data>(query, params, {
    // There's a TS issue with how initial comes over the wire
    // @ts-expect-error Remix should fix this
    initial,
  });
  const { pathname } = useLocation();

  return (
    <>
      <Header home={home} />

      <div className="container mx-auto p-4 lg:p-12 grid grid-cols-1 gap-4 lg:gap-12">
        {home?.title && pathname === "/" ? (
          <Type as="h1">{home?.title}</Type>
        ) : null}
        <Outlet />
      </div>

      <Footer home={home} />
      {sanity.preview ? (
        <Suspense>
          <SanityLiveMode />
          <ExitPreview />
          <VisualEditing />
        </Suspense>
      ) : null}
    </>
  );
}
