import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { ScrollPinnedCinema } from '../ScrollPinnedCinema';

describe('ScrollPinnedCinema', () => {
  it('renders all chapter titles', () => {
    const { getByText } = render(
      <ScrollPinnedCinema
        chapters={[
          { number: '01', title: 'A', body: 'a-body' },
          { number: '02', title: 'B', body: 'b-body' },
        ]}
      />
    );
    expect(getByText('A')).toBeTruthy();
    expect(getByText('B')).toBeTruthy();
  });
});
