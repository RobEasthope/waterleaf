import { render, screen } from '@testing-library/react';
import { Box } from './Box';
import { describe, expect, it } from 'vitest';

describe('App', () => {
  it('renders headline', () => {
    render(<Box as="div">It works and you found me!</Box>);
    const lorem = screen.getByText(/It works and you found me!/i);
    expect(lorem).toBeInTheDocument();
  });
});
