import type { LayoutProps } from '~/components/Layout/Layout';
import { Logo } from '~/components/navigation/Logo/Logo';
import { ThemeToggle } from '~/components/ThemeToggle/ThemeToggle';

export function Header(props: LayoutProps) {
  return (
    <header className="border-b border-gray-100 transition-colors duration-1000 ease-in-out dark:border-gray-900">
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-12">
        <Logo home={props.home} />
        <ThemeToggle theme={props.theme} />
      </div>
    </header>
  );
}
