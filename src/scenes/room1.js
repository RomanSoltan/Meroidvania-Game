import { makePlayer } from '../entities/player.js';
import { setBackgroundColor, setMapsColliders } from './roomUtils.js';

export function room1(k, roomData) {
  setBackgroundColor(k, '#a2aed5');

  k.camScale(4);
  k.camPos(170, 100);
  k.setGravity(1000);

  const roomLayers = roomData.layers;

  const map = k.add([k.pos(), k.sprite('room1')]);
  const colliders = [];
  const positions = [];
  for (const layer of roomLayers) {
    if (layer.name === 'positions') {
      positions.push(...layer.objects);
      continue;
    }

    if (layer.name === 'colliders') {
      colliders.push(...layer.objects);
    }
  }

  setMapsColliders(k, map, colliders);

  const player = map.add(makePlayer(k));

  for (const position of positions) {
    if (position.name === 'player') {
      player.setPosition(position.x, position.y);
      player.setControls();
      player.setEvents();
      player.enablePassthrough();
    }
  }
}
