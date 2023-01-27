const startButton = document.getElementById('start-button');
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
let beta;
let gamma;

startButton.addEventListener('click', () => {
  DeviceOrientationEvent.requestPermission();
  startButton.classList.add('hide');
  canvas.classList.remove('hide');
  window.requestAnimationFrame(draw)
});

function handleOrientationChange(event) {
  const beta = Math.round(event.beta);
  const gamma = Math.round(event.gamma);
}

window.addEventListener('deviceorientation', event => {
  handleOrientationChange(event);
});

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(20, 20, 20, 20);
}