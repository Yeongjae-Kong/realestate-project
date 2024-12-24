import { Canvas } from '@/components/style/Canvas';
import { Overlay } from '@/components/style/Overlay';

const Style = () => {
  return (
    <div className="w-full h-screen relative">
      <Canvas />
      <Overlay />
    </div>
  );
};

export default Style;