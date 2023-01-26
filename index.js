function main() {
  window.addEventListener('deviceorientation', event => {
    handleOrientationChange(event);
  });

  window.addEventListener('devicemotion', event => {
    handleMotion(event);
  })
}

function handleOrientationChange(event) {
  document.getElementById('device-moved').textContent = 'device orientation';
  document.getElementById('display').textContent = `${event.alpha}, ${event.beta}, ${event.gamma}`;
}

function handleMotion(event) {
  document.getElementById('device-moved').textContent = 'device motion'
}