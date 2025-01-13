import { useRef, ReactNode } from 'react';
import { Canvas as ThreeCanvas, useFrame, RootState } from '@react-three/fiber';
import { useGLTF, useTexture, AccumulativeShadows, RandomizedLight, Decal, Environment, Center } from '@react-three/drei';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { state } from './store';
import * as THREE from 'three';

interface AppProps {
  position?: [number, number, number];
  fov?: number;
}

export const Canvas: React.FC<AppProps> = ({ position = [0, 0, 2.5], fov = 25 }) => (
  <ThreeCanvas 
    shadows 
    camera={{ position, fov }} 
    gl={{ preserveDrawingBuffer: true }} 
    eventSource={document.getElementById('root') as HTMLElement} 
    eventPrefix="client"
  >
    <ambientLight intensity={0.5} />
    <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr" />
    <CameraRig>
      <Backdrop />
      <Center>
        <Shirt />
      </Center>
    </CameraRig>
  </ThreeCanvas>
);

function Backdrop() {
  const shadows = useRef<THREE.Group & { material?: THREE.MeshBasicMaterial }>(null);

  useFrame((state: RootState & { color?: THREE.Color }, delta) => {
    if (shadows.current?.material && state.color) {
      easing.dampC(
        shadows.current.material.color,
        state.color,
        0.25,
        delta
      );
    }
  });

  return (
    <AccumulativeShadows 
      ref={shadows as any}
      temporal 
      frames={60} 
      alphaTest={0.85} 
      scale={10} 
      rotation={[Math.PI / 2, 0, 0]} 
      position={[0, 0, -0.14]}
    >
      <RandomizedLight amount={4} radius={9} intensity={0.55} ambient={0.25} position={[5, 5, -10]} />
      <RandomizedLight amount={4} radius={5} intensity={0.25} ambient={0.55} position={[-5, 5, -9]} />
    </AccumulativeShadows>
  );
}

interface CameraRigProps {
  children: ReactNode;
}

function CameraRig({ children }: CameraRigProps) {
  const group = useRef<THREE.Group>(null);
  const snap = useSnapshot(state);
  
  useFrame((state, delta) => {
    if (group.current) {
      easing.damp3(state.camera.position, [snap.intro ? -state.viewport.width / 4 : 0, 0, 2], 0.25, delta);
      easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta);
    }
  });
  
  return <group ref={group}>{children}</group>;
}

function Shirt(props: JSX.IntrinsicElements['mesh']) {
  const snap = useSnapshot(state);
  const texture = useTexture(`/${snap.decal}.png`);
  const { nodes, materials } = useGLTF('/shirt_baked_collapsed.glb') as any;
  
  useFrame((state, delta) => {
    if (materials.lambert1) {
      easing.dampC(materials.lambert1.color, snap.color, 0.25, delta);
    }
  });
  
  return (
    <mesh 
      castShadow 
      geometry={nodes.T_Shirt_male.geometry} 
      material={materials.lambert1} 
      material-roughness={1} 
      {...props} 
      dispose={null}
    >
      <Decal 
        position={[0, 0.04, 0.15]} 
        rotation={[0, 0, 0]} 
        scale={0.2} 
        map={texture} 
        map-anisotropy={16} 
      />
    </mesh>
  );
}

useGLTF.preload('/shirt_baked_collapsed.glb');
['/clo1.png', '/three2.png', '/pmndrs.png'].forEach(useTexture.preload);