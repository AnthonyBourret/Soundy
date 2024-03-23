// Seen on https://www.delftstack.com/howto/javascript/convert-seconds-to-minutes-javascript/

function secondsToFormatedDuration(duration: number) {
  // const secondsInNumber = Number(duration);
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export default secondsToFormatedDuration;
