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

window.addEventListener('deviceorientation', event => {
  handleOrientationChange(event);
});

function handleOrientationChange(event) {
  beta = Math.round(event.beta);
  gamma = Math.round(event.gamma);
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillRect(20, 20, 20, 20);
}