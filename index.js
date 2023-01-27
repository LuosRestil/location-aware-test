const startButton = document.getElementById('start-button');
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
ctx.font = '20px sans-serif';
let beta;
let gamma;
const radius = 20;
const centerX = Math.round(canvas.width / 2);
const centerY = Math.round(canvas.height / 2);
let circleX = centerX;
let circleY = centerY;
let drawCount = 0;


startButton.addEventListener('click', () => {
  if (DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission();
  }
  startButton.classList.add('hide');
  canvas.classList.remove('hide');
  window.requestAnimationFrame(draw)
});

window.addEventListener('deviceorientation', event => {
  orientationEventCount++;
  handleOrientationChange(event);
});

function handleOrientationChange(event) {
  beta = Math.round(event.beta);
  gamma = Math.round(event.gamma);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  circleX = centerX + (beta * 2);
  circleY = centerY + (gamma * 2);

  ctx.beginPath();
  ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#FF0000';
  ctx.stroke();

  ctx.fillText('gamma: ' + gamma, 10, 20);
  ctx.fillText('beta: ' + beta, 10, 50);
  ctx.fillText('ct: ' + drawCount, 10, 70);

  drawCount++;
}