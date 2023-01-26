function main() {
  window.addEventListener('deviceorientation', event => {
    handleOrientationChange(event);
  })
}

function handleOrientationChange(event) {
  document.getElementById('device-moved').textContent = 'TRUE';
  document.getElementById('display').textContent = `${event.alpha}, ${event.beta}, ${event.gamma}`;
}