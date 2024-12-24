import { create } from 'zustand';

interface State {
  current: string;
  setCurrent: (current: string) => void;
}

export const useStore = create<State>((set) => ({
  current: 'Style',
  setCurrent: (current) => set({ current }),
}));