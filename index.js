function main() {
  window.addEventListener('onDeviceOrientationChange', e => {
    handleOrientationChange(e);
  })
}

function handleOrientationChange(event) {
  document.getElementById('display').textContent = event;
}