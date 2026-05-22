import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { HeroMeshGradientFallback } from '../HeroMeshGradient.fallback';

describe('HeroMeshGradientFallback', () => {
  it('renders a non-interactive backdrop div', () => {
    const { container } = render(<HeroMeshGradientFallback />);
    const div = container.querySelector('div');
    expect(div).toBeTruthy();
    expect(div?.getAttribute('aria-hidden')).toBe('true');
  });
});
