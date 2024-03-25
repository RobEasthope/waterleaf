import type { PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';

let isHydrating = true;

// https://remix.run/docs/en/1.19.3/guides/migrating-react-router-app#client-only-components
export function Hydrated({ children }: PropsWithChildren): JSX.Element {
  const [isHydrated, setIsHydrated] = useState(!isHydrating);

  useEffect(() => {
    isHydrating = false;
    setIsHydrated(true);
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return isHydrated && children ? <>{children}</> : <></>;
}
