import { Canvas as ThreeCanvas } from '@react-three/fiber';
import { Environment, Center } from '@react-three/drei';
import { Model } from './Model';

export const Canvas = () => {
  return (
    <div className="w-full h-full">
      <ThreeCanvas
        shadows
        camera={{ position: [0, 0, 4], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <Environment preset="city" />
        <Center>
          <Model />
        </Center>
      </ThreeCanvas>
    </div>
  );
};