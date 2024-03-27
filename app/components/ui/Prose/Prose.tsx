import './prose.css';

import type { PortableTextComponents } from '@portabletext/react';
import { PortableText } from '@portabletext/react';
import type { LinksFunction } from '@vercel/remix';
import classNames from 'classnames';

import { Box } from '~/components/ui/Box/Box';

export type ProseProps = {
  as: string;
  className?: string;
  content: any;
  components: unknown;
};

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export function Prose({
  as = 'div',
  content,
  components,
  className,
}: ProseProps) {
  if (!content) {
    return null;
  }

  return (
    <Box as={as} className={classNames('prose', 'text-ink', className)}>
      <PortableText
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        value={content}
        components={components as PortableTextComponents}
      />
    </Box>
  );
}
