// https://remix.run/docs/en/main/guides/migrating-react-router-app
import type { PropsWithChildren } from "react";
import { useEffect, useState } from "react";

let isHydrating = true;

export function Hydrated({ children }: PropsWithChildren): JSX.Element {
  const [isHydrated, setIsHydrated] = useState(!isHydrating);

  useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return isHydrated && children ? <>{children}</> : <></>;
}
