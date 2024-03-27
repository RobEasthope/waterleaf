import './app.css';

import type { LoaderFunctionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { lazy, Suspense } from 'react';

import { Layout } from '~/components/decommisioning/Layout/Layout';
import { isStegaEnabled } from '~/sanity/isStegaEnabled.server';
import { useQuery } from '~/sanity/loader';
import { loadQuery } from '~/sanity/loader.server';
import { frontendUrl, studioUrl } from '~/sanity/projectDetails';
import { HOME_QUERY } from '~/sanity/queries';
import type { HomeDocument } from '~/types/home';
import { homeZ } from '~/types/home';
import { themePreference } from '~/types/themePreference';
import { getBodyClassNames } from '~/utils/getBodyClassNames';

const LiveVisualEditing = lazy(
  () => import('~/components/support/LiveVisualEditing/LiveVisualEditing'),
);

export type Loader = typeof loader;

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const stegaEnabled = isStegaEnabled(request.url);

  // Sanity content reused throughout the site
  const query = HOME_QUERY;
  const queryParams = {};
  const initial = await loadQuery<HomeDocument>(query, queryParams, {
    perspective: stegaEnabled ? 'previewDrafts' : 'published',
  }).then((res) => ({
    ...res,
    data: res.data ? homeZ.parse(res.data) : undefined,
  }));

  return json({
    initial,
    query,
    params: queryParams,
    sanity: {
      isStudioRoute: new URL(request.url).pathname.startsWith('/studio'),
      stegaEnabled,
    },
    ENV: {
      VITE_SANITY_PROJECT_ID: import.meta.env.VITE_SANITY_PROJECT_ID,
      VITE_SANITY_DATASET: import.meta.env.VITE_SANITY_DATASET,
      VITE_SANITY_API_VERSION: import.meta.env.VITE_SANITY_API_VERSION,
      // URL of the Frontend that will be loaded into Presentation
      VITE_SANITY_FRONTEND_URL: frontendUrl,
      // URL of the Studio to allow requests from Presentation
      VITE_SANITY_URL: studioUrl,
    },
  });
};

export default function App() {
  const { initial, query, params, sanity, ENV } =
    useLoaderData<typeof loader>();
  const { data, loading } = useQuery<typeof initial.data>(query, params, {
    // @ts-expect-error Sanity says to just expect the error due the problems of handling types in Sanity datasets after a certain point
    initial,
  });

  return (
    <html lang="en">
      <head>
        <Meta />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="https://fav.farm/🌊" />
        <Links />
      </head>
      <body>
        {sanity.isStudioRoute ? (
          <Outlet />
        ) : (
          <Layout home={loading || !data ? initial.data : data}>
            <Outlet />
          </Layout>
        )}
        <ScrollRestoration />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
        <Scripts />
        {!sanity.isStudioRoute && sanity.stegaEnabled ? (
          <Suspense>
            <LiveVisualEditing studioUrl={ENV.VITE_SANITY_URL} />
          </Suspense>
        ) : null}
      </body>
    </html>
  );
}
