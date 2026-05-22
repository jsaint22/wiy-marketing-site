import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { EditorialPullQuote } from '../EditorialPullQuote';

describe('EditorialPullQuote', () => {
  it('renders the quote text', () => {
    const { getByText } = render(
      <EditorialPullQuote>This is the quote.</EditorialPullQuote>
    );
    expect(getByText('This is the quote.')).toBeTruthy();
  });
});
