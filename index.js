function main() {
  window.addEventListener('deviceorientation', event => {
    handleOrientationChange(event);
    // 
  })
}

function handleOrientationChange(event) {
  document.getElementById('display').textContent = `${event.alpha}, ${event.beta}, ${event.gamma}`;
}