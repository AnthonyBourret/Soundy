import React, {
  RefObject,
  useEffect,
} from 'react';
import { useTranslation } from 'react-i18next';
import {
  setIsPlaying,
  setSongTitle,
  setAlbumSongPlaying,
  setSongDuration,
  useAppSelector,
  useAppDispatch,
} from '../../redux';
import { AUDIO_SOURCE_MP3, secondsToFormatedDuration } from '../../utils';

type Props = {
  audioRef: RefObject<HTMLAudioElement>;
  setCurrentTime: (time: number) => void;
  setCurrentSongId: (id: number) => void;
  getSong: (variables: { variables: { songId: number } }) => Promise<any>;
};

const AudioSource = (props: Props): JSX.Element => {
  const {
    audioRef, setCurrentTime, setCurrentSongId, getSong,
  } = props;
  const dispatch = useAppDispatch();
  const { t } = useTranslation('common');
  const isPlaying = useAppSelector((state) => state.audioPlayer.isPlaying);
  const albumSongIds = useAppSelector((state) => state.audioPlayer.album.songIds);
  const volume = useAppSelector((state) => state.audioPlayer.volume);
  const songPlayingId = useAppSelector((state) => state.audioPlayer.album.songPlaying);

  const handleSongEnd = async () => {
    if (albumSongIds) {
      const currentSongIndex = albumSongIds.indexOf(songPlayingId!);
      // If it's not an album we rewind the song to the beginning
      if (albumSongIds && albumSongIds.length === 0) {
        audioRef.current!.currentTime = 0;
        dispatch(setIsPlaying(false));
      }
      // If it's an album we play the next song, after finding it
      if (albumSongIds && albumSongIds.length > 1 && songPlayingId) {
        setCurrentSongId(songPlayingId!);
        const nextSongIndex = currentSongIndex + 1;
        const nextSongId = albumSongIds[nextSongIndex];
        const song = await getSong({ variables: { songId: nextSongId } });
        if (song.data?.song) {
          audioRef.current!.currentTime = 0;
          dispatch(setSongTitle(song.data.song.title));
          dispatch(setAlbumSongPlaying(nextSongId));
          dispatch(setSongDuration(secondsToFormatedDuration(song.data.song.duration)));
          setCurrentSongId(nextSongId);
          audioRef.current!.play();
        }
      }
      if (albumSongIds && currentSongIndex === albumSongIds.length - 1) {
        const firstSongId = albumSongIds[0];
        const song = await getSong({ variables: { songId: firstSongId } });
        if (song.data?.song) {
          audioRef.current!.currentTime = 0;
          dispatch(setSongTitle(song.data.song.title));
          dispatch(setAlbumSongPlaying(firstSongId));
          dispatch(setSongDuration(secondsToFormatedDuration(song.data.song.duration)));
          setCurrentSongId(firstSongId);
        }
      }
    }
  };

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
    <audio
      ref={audioRef}
      onEnded={handleSongEnd}
      onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
    >
      <source src={AUDIO_SOURCE_MP3} type="audio/mpeg" />
      {t('PLAYER_ERROR')}
    </audio>
  );
};

export default AudioSource;
