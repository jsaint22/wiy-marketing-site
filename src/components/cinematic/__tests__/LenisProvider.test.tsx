import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { LenisProvider } from '../LenisProvider';

describe('LenisProvider', () => {
  it('renders children', () => {
    const { getByText } = render(
      <LenisProvider><div>child</div></LenisProvider>
    );
    expect(getByText('child')).toBeTruthy();
  });
});
