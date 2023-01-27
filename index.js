const startButton = document.getElementById('start-button');
const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");
ctx.font = '20px sans-serif';
let beta = 0;
let gamma = 0;
const radius = 20;
const centerX = Math.round(canvas.width / 2);
const centerY = Math.round(canvas.height / 2);
let circleX = centerX;
let circleY = centerY;
let vx = 0;
let vy = 0;
const accelRate = 0.01;
maxVelocity = 2;
// let ax = 0;
// let ay = 0;


startButton.addEventListener('click', () => {
  if (DeviceOrientationEvent.requestPermission) {
    DeviceOrientationEvent.requestPermission();
  }
  startButton.classList.add('hide');
  canvas.classList.remove('hide');
  window.requestAnimationFrame(draw);
});

window.addEventListener('deviceorientation', event => {
  handleOrientationChange(event);
});

function handleOrientationChange(event) {
  beta = event.beta;
  gamma = event.gamma;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  moveCircle()
  drawCircle()

  ctx.fillText('gamma: ' + Math.round(gamma), 10, 20);
  ctx.fillText('beta: ' + Math.round(beta), 10, 50);

  window.requestAnimationFrame(draw)
}

function moveCircle() {
  // acceleration
  vx += Math.min(gamma * accelRate, maxVelocity);
  vy += Math.min(beta * accelRate, maxVelocity);
  // friction
  if (vx < 0) {
    vx = Math.max(vx + 0.01, 0);
  } else if (vx > 0) {
    vx = Math.min(vx - 0.01, 0);
  }
  if (vy < 0) {
    vy = Math.max(vy + 0.01, 0);
  } else if (vx > 0) {
    vy = Math.min(vy - 0.01, 0);
  }
  circleX += vx;
  circleY += vy;

  if (circleX > canvas.width - radius) {
    circleX = canvas.width - radius;
    vx = 0;
  } else if (circleX < radius) {
    circleX = radius;
    vx = 0;
  }

  if (circleY > canvas.height - radius) {
    circleY = canvas.height - radius;
    vy = 0;
  } else if (circleY < radius) {
    circleY = radius;
    vy = 0;
  }
}

function drawCircle() {
  ctx.beginPath();
  ctx.arc(circleX, circleY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = 'black';
  ctx.fill();
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#FF0000';
  ctx.stroke();
}

