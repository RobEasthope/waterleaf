import { type PropsWithChildren } from 'react';

import { Footer } from '~/components/navigation/Footer/Footer';
import { Header } from '~/components/navigation/Header/Header';

export type LayoutProps = PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}
