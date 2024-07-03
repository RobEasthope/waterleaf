import type { LoaderFunctionArgs } from "@remix-run/node";
import {
  json,
  Outlet,
  useLoaderData,
  useLocation,
  useOutletContext,
} from "@remix-run/react";
import { useQuery } from "@sanity/react-loader";
import { VisualEditing } from "@sanity/visual-editing/remix";
import { lazy, Suspense } from "react";

import { Title } from "~/components/_unsorted/Title/Title";
import { Footer } from "~/components/navigation/Footer/Footer";
import { Header } from "~/components/navigation/Header/Header";
import { loadQuery } from "~/components/sanity/loader.server";
import { loadQueryOptions } from "~/components/sanity/loadQueryOptions.server";
import { HOME_QUERY } from "~/components/sanity/queries";
import type { HomeDocument } from "~/types/home";
import { homeZ } from "~/types/home";
import type { ThemePreference } from "~/types/themePreference";

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
    // @ts-expect-error
    initial,
  });
  const { pathname } = useLocation();
  const { theme } = useOutletContext<{ theme: ThemePreference }>();

  return (
    <>
      <Header home={home} theme={theme} />
      <div className="container mx-auto p-4 lg:p-12 grid grid-cols-1 gap-4 lg:gap-12">
        {home?.title && pathname === "/" ? <Title>{home?.title}</Title> : null}
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
