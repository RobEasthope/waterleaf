import { useRouteLoaderData } from "@remix-run/react";

import type { Loader as RootLoader } from "~/root";

export function useRootLoaderData() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = useRouteLoaderData<RootLoader>(`root`);

  return data as unknown;
}
