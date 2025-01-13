import { proxy } from 'valtio';
import * as THREE from 'three';

type State = {
  intro: boolean;
  color: THREE.ColorRepresentation;
  decal: string;
  colors: string[];
  decals: string[];
}

export const state = proxy<State>({
  intro: true,
  color: '#ffffff',
  decal: 'default',
  colors: ['#ffffff', '#000000', '#ff0000'],
  decals: ['decal1', 'decal2', 'decal3'],
});