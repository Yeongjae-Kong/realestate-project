import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

export function Model(props: any) {
  const meshRef = useRef<Mesh>(null);
  const { nodes, materials } = useGLTF('/model.glb') as any;

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      {...props}
      geometry={nodes.Scene.geometry}
      material={materials.material}
      scale={1}
    />
  );
}