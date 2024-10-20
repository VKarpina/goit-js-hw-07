const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');
const input = document.querySelector('.input');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnCreate.addEventListener('click', onCreate);
btnDestroy.addEventListener('click', onDestroy);

let size = 30;

function onDestroy() {
  input.value = '';
  clear();
}

function onCreate() {
  if (input.value < 1 || input.value > 100) {
    return;
  }
  createBoxes(input.value);
}

function clear() {
  boxes.innerHTML = '';
  size = 30;
}

function createBoxes(amount) {
  clear();

  for (let i = 0; i < amount; i++) {
    size += 10;
    const newBox = document.createElement('div');
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();

    boxes.append(newBox);
  }
}
