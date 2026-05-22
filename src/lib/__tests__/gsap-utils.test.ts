import { describe, expect, it } from 'vitest';

describe('gsap-utils', () => {
  it('registerPlugins is a function', async () => {
    const mod = await import('../gsap-utils');
    expect(typeof mod.registerPlugins).toBe('function');
  });

  it('syncLenisToGsap is a function', async () => {
    const mod = await import('../gsap-utils');
    expect(typeof mod.syncLenisToGsap).toBe('function');
  });
});
