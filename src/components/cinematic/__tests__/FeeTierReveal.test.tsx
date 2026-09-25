import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { FeeTierReveal } from '../FeeTierReveal';

describe('FeeTierReveal', () => {
  it('renders all tier net-worth labels', () => {
    const { getByText } = render(
      <FeeTierReveal
        tiers={[
          { netWorth: '$3M', monthly: 1417, effectiveRate: '0.57%' },
          { netWorth: '$5M', monthly: 1750, effectiveRate: '0.42%' },
        ]}
      />
    );
    expect(getByText('$3M net worth')).toBeTruthy();
    expect(getByText('$5M net worth')).toBeTruthy();
  });
});
