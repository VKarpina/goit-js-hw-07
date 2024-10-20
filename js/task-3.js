const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
input.addEventListener('input', handleInput);

function handleInput(event) {
  const name = event.target.value.trim();
  name ? (span.textContent = `${name}`) : (span.textContent = `Anonymous`);
}
