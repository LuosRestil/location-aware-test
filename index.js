const startButton = document.getElementById('start-button');
const canvas = document.getElementById('canvas');
let beta;
let gamma;

screen.orientation.lock("landscape");

startButton.addEventListener('click', () => {
  DeviceOrientationEvent.requestPermission();
  startButton.classList.add('hide');
  canvas.classList.remove('hide');
  window.requestAnimationFrame(draw)
});

window.addEventListener('deviceorientation', event => {
  handleOrientationChange(event);
});

function handleOrientationChange(event) {
  const beta = Math.round(event.beta);
  const gamma = Math.round(event.gamma);
}

function draw() {
  document.querySelector('body').innerHTML = 'locked';
}