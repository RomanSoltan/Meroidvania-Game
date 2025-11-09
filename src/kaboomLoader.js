import kaboom from './lib/kaboom.mjs';

export const scale = 2;
export const k = kaboom({
  width: 640 * scale,
  height: 360 * scale,
  scale,
  letterbox: true, // made adaptive
  global: false,
});

k.loadFont('glyphmesss', './src/assets/glyphmesss.ttf');

k.loadSprite('player', './src/assets/sprites/u.png', {
  sliceX: 8,
  sliceY: 9,
  anims: {
    idle: { from: 0, to: 7, loop: true },
    run: { from: 8, to: 13, loop: true },
    jump: 51,
    fall: 54,
    explode: { from: 64, to: 69 },
    attack: { from: 24, to: 28, speed: 16 },
  },
});

k.loadSprite('drone', './src/assets/sprites/dr0ne.png', {
  sliceX: 6,
  sliceY: 3,
  anims: {
    flying: { from: 0, to: 3, loop: true },
    attack: { from: 6, to: 11, loop: true },
    explode: { from: 12, to: 17 },
  },
});

k.loadSprite('burner', './src/assets/sprites/burn3r.png', {
  sliceX: 5,
  sliceY: 6,
  anims: {
    idle: { from: 0, to: 3, loop: true },
    run: { from: 6, to: 8, loop: true },
    'open-fire': { from: 10, to: 14 },
    fire: { from: 15, to: 18, loop: true },
    'shut-fire': { from: 20, to: 23 },
    explode: { from: 25, to: 29 },
  },
});

k.loadSpriteAtlas('./src/assets/ui.png', {
  healthBar: {
    x: 16,
    y: 16,
    width: 60,
    height: 48,
    sliceY: 3,
  },
});

k.loadSpriteAtlas('./src/assets/animations.png', {
  cartridge: {
    x: 125,
    y: 145,
    width: 134,
    height: 16,
    sliceX: 8,
    anims: {
      default: { from: 0, to: 4, loop: true, speed: 7 },
    },
  },
});

k.loadSprite('tileset', './src/assets/tileset.png', {
  sliceX: 33,
  sliceY: 21,
});

k.loadSprite('background', './src/assets/background.png', {
  sliceX: 13,
  sliceY: 25,
});

k.loadSound('notify', './src/assets/sounds/notify.mp3');
k.loadSound('boom', './src/assets/sounds/boom.wav');
k.loadSound('health', './src/assets/sounds/health.wav');
k.loadSound('flamethrower', './src/assets/sounds/flamethrower.mp3');

k.loadSprite('room1', './src/maps/room1.png');
k.loadSprite('room2', './src/maps/room2.png');
