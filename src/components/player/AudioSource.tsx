import React, {
  RefObject,
  useEffect,
} from 'react';
import { AUDIO_SOURCE_MP3 } from '../../utils';
import { useAppSelector } from '../../redux';

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
  setCurrentTime: (time: number) => void;
};

const AudioSource = (props: Props): JSX.Element => {
  const { audioRef, setCurrentTime } = props;
  const isPlaying = useAppSelector((state) => state.audioPlayer.isPlaying);
  const volume = useAppSelector((state) => state.audioPlayer.volume);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [audioRef, isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [audioRef, volume]);

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <audio ref={audioRef} onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}>
      <source src={AUDIO_SOURCE_MP3} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioSource;
