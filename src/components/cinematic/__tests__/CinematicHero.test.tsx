import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { CinematicHero } from '../CinematicHero';

describe('CinematicHero', () => {
  it('renders eyebrow, headline, subhead, and primary CTA', () => {
    const { getByText } = render(
      <CinematicHero
        eyebrow="Test Eyebrow"
        headline="Test headline"
        subhead="Test subhead"
        primaryCta={{ label: 'Test CTA', href: '/foo' }}
      />
    );
    expect(getByText('Test Eyebrow')).toBeTruthy();
    expect(getByText('Test headline')).toBeTruthy();
    expect(getByText('Test subhead')).toBeTruthy();
    expect(getByText('Test CTA')).toBeTruthy();
  });
});
