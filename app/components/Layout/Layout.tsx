import { useLocation } from '@remix-run/react';
import { type PropsWithChildren } from 'react';

import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header/Header';
import { Title } from '~/components/Title/Title';
import type { LogoProps } from '~/types/home';
import type { ThemePreference } from '~/types/themePreference';

export type LayoutProps = PropsWithChildren<
  LogoProps & { theme: ThemePreference }
>;

export function Layout({ home, theme, children }: LayoutProps) {
  const { pathname } = useLocation();

  return (
    <>
      <Header home={home} theme={theme} />
      <div className="container mx-auto p-4 lg:p-12 grid grid-cols-1 gap-4 lg:gap-12">
        {home?.title && pathname === '/' ? <Title>{home?.title}</Title> : null}
        {children}
      </div>
      <Footer home={home} />
    </>
  );
}
