import { render, screen } from '@testing-library/react';
import { Box } from './Box';
import { describe, expect, it } from 'vitest';

describe('App', () => {
  it('renders children', () => {
    render(<Box as="div">Lorem ipsum</Box>);

    expect(screen.queryAllByText(/Lorem ipsum/i)).toBeDefined();
  });
});
