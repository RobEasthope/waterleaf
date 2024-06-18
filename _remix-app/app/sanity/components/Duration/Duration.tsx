import { Box, Code, Flex } from '@sanity/ui';
import type { NumberInputProps } from 'sanity';

import { secondsToMinutes } from '~/utils/secondsToMinutes';

export default function Duration({ renderDefault, value }: NumberInputProps) {
  return (
    <Flex gap={3} align="center">
      <Box flex={1}>{renderDefault(renderDefault, value)}</Box>
      {value ? <Code size={4}>{secondsToMinutes(value)}</Code> : null}
    </Flex>
  );
}
