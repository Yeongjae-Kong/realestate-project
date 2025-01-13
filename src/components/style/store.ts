import { proxy } from 'valtio';

export const state = proxy({
  intro: true,
  color: '#ffffff',
  decal: 'default',
  colors: ['#ffffff', '#000000', '#ff0000'], // Example colors
  decals: ['decal1', 'decal2', 'decal3'], // Example decals
});