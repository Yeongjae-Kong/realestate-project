import { useStore } from './store';

export const Overlay = () => {
  const snap = useStore();
  
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      <div className="absolute bottom-8 left-8 z-10 text-white">
        <h1 className="text-3xl font-bold">{snap.current}</h1>
      </div>
    </div>
  );
};