import { Howl } from 'howler';

export const playAudio = (src) => {
  const sound = new Howl({ src: [src] });
  sound.play();
};
