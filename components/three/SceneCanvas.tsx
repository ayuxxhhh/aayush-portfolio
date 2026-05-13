'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Blob() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ mouse, clock }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouse.y * 0.3, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 0.5, 0.05);
    meshRef.current.position.y = Math.sin(clock.elapsedTime * 0.6) * 0.2;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.1}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.8, 6]} />
        <meshStandardMaterial color="#8b5cf6" emissive="#312e81" wireframe opacity={0.5} transparent />
      </mesh>
    </Float>
  );
}

export function SceneCanvas() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[3, 3, 2]} intensity={1.2} />
        <Blob />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
