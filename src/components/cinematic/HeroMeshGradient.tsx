'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from '@/lib/use-reduced-motion';
import { HeroMeshGradientFallback } from './HeroMeshGradient.fallback';

/**
 * Shader-driven ambient mesh gradient. Three soft radial blobs drift slowly
 * over a cream base. GPU-accelerated; ~8KB compiled shader.
 *
 * Fallback to CSS gradient for prefers-reduced-motion users.
 */
function MeshShader() {
  const ref = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorCream: { value: new THREE.Color('#F7F3ED') },
      uColorGold: { value: new THREE.Color('#C9A449') },
      uColorTeal: { value: new THREE.Color('#1B3A4B') },
    }),
    []
  );

  useFrame((state) => {
    if (ref.current) {
      ref.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  const vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const fragmentShader = `
    uniform float uTime;
    uniform vec3 uColorCream;
    uniform vec3 uColorGold;
    uniform vec3 uColorTeal;
    varying vec2 vUv;

    void main() {
      float t = uTime * 0.05;

      vec2 goldCenter = vec2(0.75 + sin(t) * 0.06, 0.78 + cos(t * 0.7) * 0.04);
      float gold = smoothstep(0.55, 0.0, distance(vUv, goldCenter));

      vec2 tealCenter = vec2(0.22 + cos(t * 0.6) * 0.05, 0.22 + sin(t * 0.9) * 0.03);
      float teal = smoothstep(0.6, 0.0, distance(vUv, tealCenter));

      vec2 midCenter = vec2(0.55 + sin(t * 0.3) * 0.03, 0.4 + cos(t * 0.4) * 0.02);
      float mid = smoothstep(0.4, 0.0, distance(vUv, midCenter));

      vec3 color = uColorCream;
      color = mix(color, uColorGold, gold * 0.28);
      color = mix(color, uColorTeal, teal * 0.14);
      color = mix(color, uColorGold, mid * 0.08);

      gl_FragColor = vec4(color, 1.0);
    }
  `;

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={ref}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export function HeroMeshGradient() {
  const reduce = useReducedMotion();
  if (reduce) return <HeroMeshGradientFallback />;

  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10 pointer-events-none">
      <Canvas
        orthographic
        camera={{ zoom: 1, position: [0, 0, 1] }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false }}
      >
        <MeshShader />
      </Canvas>
    </div>
  );
}
