import { describe, expect, it } from 'vitest';

describe('useReducedMotion', () => {
  it('is a function', async () => {
    const mod = await import('../use-reduced-motion');
    expect(typeof mod.useReducedMotion).toBe('function');
  });
});
