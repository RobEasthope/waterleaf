import type { LayoutProps } from '~/components/decommisioning/Layout/Layout';
import { Logo } from '~/components/navigation/Logo/Logo';

export function Header({ home }: LayoutProps) {
  return (
    <header className="border-b border-gray-100 transition-colors duration-1000 ease-in-out dark:border-gray-900">
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-12">
        <Logo home={home} />
      </div>
    </header>
  );
}
