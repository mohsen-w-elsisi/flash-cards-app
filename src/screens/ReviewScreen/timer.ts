export default function createTimer() {
  let intervalReferance: NodeJS.Timeout;
  let timeElapsed = 0;

  const incrementTImer = () => timeElapsed++;

  function startTimer() {
    intervalReferance = setInterval(incrementTImer, 1000);
  }

  function stopTimer() {
    clearTimeout(intervalReferance);
    return timeElapsed;
  }

  return { startTimer, stopTimer };
}
