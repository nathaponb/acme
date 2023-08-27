'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { Model } from '../public/Icecream';

export default function Box(props: any) {
  const ref = useRef<Mesh>(null!);
  return (
    <div className="h-full border-2 border-rose-500">
      <Canvas
        className="h-full"
        shadows
        camera={{ position: [-30, 10, 0], fov: 5 }}
      >
        <ambientLight intensity={1} />
        <directionalLight position={[10, 0, 5]} />
        {/* <mesh {...props} ref={ref}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh> */}
        <Model position={[0, -1, 0]} />
        <OrbitControls autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}
