'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Model } from '../public/Plant';

export default function Box(props: any) {
  const ref = useRef<Mesh>(null!);
  return (
    <div className="w-full h-full">
      <Canvas
        className="h-full"
        shadows
        camera={{ position: [-30, 20, 0], fov: 5 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 0, 5]} castShadow />
        {/* <mesh {...props} ref={ref}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh> */}
        <Model position={[0, -0.5, 0]} />
        <OrbitControls autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}
