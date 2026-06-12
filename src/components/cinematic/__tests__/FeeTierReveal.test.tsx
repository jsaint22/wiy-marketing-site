import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { FeeTierReveal } from '../FeeTierReveal';

describe('FeeTierReveal', () => {
  it('renders all tier net-worth labels', () => {
    const { getByText } = render(
      <FeeTierReveal
        tiers={[
          { netWorth: '$1M', monthly: 1250, effectiveRate: '1.50%' },
          { netWorth: '$3M', monthly: 1417, effectiveRate: '0.57%' },
        ]}
      />
    );
    expect(getByText('$1M net worth')).toBeTruthy();
    expect(getByText('$3M net worth')).toBeTruthy();
  });
});
