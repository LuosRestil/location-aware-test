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
  vx += Math.min(gamma * accelRate, maxVelocity);
  vy += Math.min(beta * accelRate, maxVelocity);
  circleX += vx;
  circleY += vy;

  // circleX = centerX + (gamma * 2);
  // circleY = centerY + (beta * 4);


  if (circleX > canvas.width - radius) {
    circleX = canvas.width - radius;
  } else if (circleX < radius) {
    circleX = radius;
  }

  if (circleY > canvas.height - radius) {
    circleY = canvas.height - radius;
  } else if (circleY < radius) {
    circleY = radius;
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

