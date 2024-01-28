// Seen on https://www.delftstack.com/howto/javascript/convert-seconds-to-minutes-javascript/

function secondsToFormatedDuration(duration: string) {
  const secondsInNumber = Number(duration);
  const minutes = Math.floor(secondsInNumber / 60);
  const seconds = secondsInNumber % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export default secondsToFormatedDuration;
