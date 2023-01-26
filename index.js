function main() {
  window.addEventListener('deviceorientation', e => {
    handleOrientationChange(e);
  })
}

function handleOrientationChange(event) {
  document.getElementById('display').textContent = event;
}