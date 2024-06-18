import './prose.css';

import type { PortableTextComponents } from '@portabletext/react';
import { PortableText } from '@portabletext/react';

import { Box } from '~/components/ui/Box/Box';
import { cn } from '~/utils/tailwind';

export type ProseProps = {
  as: string;
  className?: string;
  content: any;
  components: unknown;
};

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
    <Box as={as} className={cn('prose', 'text-ink', className)}>
      <PortableText
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        value={content}
        components={components as PortableTextComponents}
      />
    </Box>
  );
}
