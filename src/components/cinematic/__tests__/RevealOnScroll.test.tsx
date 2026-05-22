import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { RevealOnScroll } from '../RevealOnScroll';

describe('RevealOnScroll', () => {
  it('renders children', () => {
    const { getByText } = render(
      <RevealOnScroll><div>child</div></RevealOnScroll>
    );
    expect(getByText('child')).toBeTruthy();
  });
});
