import secondsToFormatedDuration from './secondsToFormatedDuration';

export function getPreviousSong() {
  // WIP - go to previous song by a new request with song id
}

export function getNextSong() {
  // WIP - go to next song by a new request with song id
}

interface Props {
  duration: string;
}

export function getAlbumDuration(songList: Props[]) {
  let duration = 0;
  songList.forEach((song) => {
    duration += Number(song.duration);
  });
  return secondsToFormatedDuration(duration);
}
