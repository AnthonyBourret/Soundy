/* eslint-disable jsx-a11y/media-has-caption */
import React, { type RefObject } from 'react';
import { AUDIO_SOURCE_MP3 } from '../../utils';

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
};

const AudioSource = (props: Props): JSX.Element => {
  // const audioRef = useRef<HTMLAudioElement>(null);
  const { audioRef } = props;

  return (
    <audio ref={audioRef}>
      <source src={AUDIO_SOURCE_MP3} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioSource;
