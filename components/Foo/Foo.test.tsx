import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Foo } from './Foo';

test('Foo', () => {
  render(<Foo />);
  expect(screen.getByRole('heading', { level: 1, name: 'Foo' })).toBeDefined();
});
