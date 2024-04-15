import React, {
  RefObject,
  useEffect,
} from 'react';
import { AUDIO_SOURCE_MP3 } from '../../utils';
import { setTime, useAppDispatch, useAppSelector } from '../../redux';

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
};

const AudioSource = (props: Props): JSX.Element => {
  const { audioRef } = props;
  const dispatch = useAppDispatch();
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

  useEffect(() => {
    if (audioRef.current) {
      const updateProgress = () => {
        if (audioRef.current && audioRef.current.currentTime > 0) {
          const percentage = (audioRef.current.currentTime / audioRef.current.duration) * 100;
          dispatch(setTime(percentage));
        }
      };
      const currentAudioRef = audioRef.current;
      currentAudioRef.addEventListener('timeupdate', updateProgress);

      return () => {
        if (currentAudioRef) {
          currentAudioRef.removeEventListener('timeupdate', updateProgress);
        }
      };
    }
    return () => {};
  }, [audioRef, dispatch]);

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <audio ref={audioRef}>
      <source src={AUDIO_SOURCE_MP3} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioSource;
