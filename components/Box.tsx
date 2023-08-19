'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Box(props: any) {
  const ref = useRef<Mesh>(null!);
  return (
    <div className="canvas_wrap">
      <Canvas shadows camera={{ position: [4, 0, 1], fov: 35 }}>
        <ambientLight intensity={0.5} />
        <directionalLight color="red" position={[0, 0, 5]} castShadow />
        <mesh {...props} ref={ref}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="hotpink" />
        </mesh>
        <OrbitControls autoRotate autoRotateSpeed={2} />
      </Canvas>
    </div>
  );
}
