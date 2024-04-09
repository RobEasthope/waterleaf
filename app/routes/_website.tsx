import type { LoaderFunctionArgs } from '@remix-run/node';
import { json, Outlet, useLoaderData, useLocation } from '@remix-run/react';
import { useQuery } from '@sanity/react-loader';
import { VisualEditing } from '@sanity/visual-editing/remix';

import { Footer } from '~/components/navigation/Footer/Footer';
import { Header } from '~/components/navigation/Header/Header';
import { ExitPreview } from '~/components/support/ExitPreview/ExitPreview';
import { loadQuery } from '~/sanity/loader.server';
import { loadQueryOptions } from '~/sanity/loadQueryOptions.server';
import { HOME_QUERY } from '~/sanity/queries';
import type { HomeDocument } from '~/types/home';
import { homeZ } from '~/types/home';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { preview, options } = await loadQueryOptions(request.headers);

  // Sanity content reused throughout the site
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

  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
      {sanity.preview ? (
        <>
          <VisualEditing />
          <ExitPreview />
        </>
      ) : null}
    </>
  );
}
