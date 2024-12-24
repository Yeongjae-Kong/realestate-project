import { Canvas as ThreeCanvas } from '@react-three/fiber';
import { Environment, Center, OrbitControls } from '@react-three/drei';
import { Model } from './Model';
import { Suspense } from 'react';

export const Canvas = () => {
  return (
    <div className="w-full h-full">
      <ThreeCanvas
        shadows
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Environment preset="city" />
          <Center>
            <Model />
          </Center>
          <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
        </Suspense>
      </ThreeCanvas>
    </div>
  );
};