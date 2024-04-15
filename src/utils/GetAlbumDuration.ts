import secondsToFormatedDuration from './secondsToFormatedDuration';

interface Props {
  duration: string;
}

function getAlbumDuration(songList: Props[]) {
  let duration = 0;
  songList.forEach((song) => {
    duration += Number(song.duration);
  });
  return secondsToFormatedDuration(duration);
}

export default getAlbumDuration;
