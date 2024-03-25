import { type PropsWithChildren } from 'react';

import { Footer } from '~/components/navigation/Footer/Footer';
import { Header } from '~/components/navigation/Header/Header';
import type { LogoProps } from '~/types/home';
import type { ThemePreference } from '~/types/themePreference';

export type LayoutProps = PropsWithChildren<
  LogoProps & { theme: ThemePreference }
>;

export function Layout({ home, theme, children }: LayoutProps) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
