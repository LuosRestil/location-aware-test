function main() {
  const startButton = document.getElementById('start-button');
  startButton.addEventListener('click', () => {
    DeviceOrientationEvent.requestPermission();
    startButton.classList.add('hide');
  });

  window.addEventListener('deviceorientation', event => {
    handleOrientationChange(event);
  });
}

function handleOrientationChange(event) {
  const alpha = Math.round(event.alpha);
  const beta = Math.round(event.beta);
  const gamma = Math.round(event.gamma);
  document.getElementById('display').textContent = `${alpha}, ${beta}, ${gamma}`;
}