import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Mesh, BoxGeometry, MeshStandardMaterial } from 'three';

export function Model(props: any) {
  const meshRef = useRef<Mesh>(null);
  
  // Create a fallback geometry if model fails to load
  const fallbackGeometry = new BoxGeometry(1, 1, 1);
  const fallbackMaterial = new MeshStandardMaterial({ 
    color: 0x808080,
    metalness: 0.5,
    roughness: 0.5
  });

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh
      ref={meshRef}
      {...props}
      geometry={fallbackGeometry}
      material={fallbackMaterial}
      scale={1}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="gray" />
    </mesh>
  );
}

useGLTF.preload('/model.glb');