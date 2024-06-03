interface Props {
  songIds: number[];
  currentSongId: number;
}

export default function getNextSongId({ songIds, currentSongId }: Props) {
  if (albumSongsIds?.length === 0) return;

  if (albumSongsIds && currentSongId && albumSongsIds?.length > 1) {
    if (audioRef.current && audioRef.current?.currentTime > 1) {
      audioRef.current!.currentTime = 0;
    } else {
      const currentSongIndex = albumSongsIds.indexOf(songPlayingId!);
      if (currentSongIndex === 0) return;
      setCurrentSongId(songPlayingId!);
      const previousSongIndex = currentSongIndex - 1;
      const previousSongId = albumSongsIds[previousSongIndex];
      const song = await getSong({ variables: { songId: previousSongId } });
  }
}
