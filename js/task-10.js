function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesRef = document.querySelector('#boxes');
const inputRef = document.querySelector('input');
const buttonRef = document.querySelectorAll('button');
const buttonCreateRef = buttonRef[0];
const buttonDestroyRef = buttonRef[1];

buttonCreateRef.addEventListener('click', createBoxes);

function createBoxes() {
  boxesRef.innerHTML = '';
  const elements = [];

  for (let i = 1; i <= inputRef.value; i += 1) {
    const createDiv = document.createElement('div');
    console.log(createDiv);

    createDiv.style.backgroundColor = getRandomHexColor();
    createDiv.style.width = i * 10 + 20 + 'px';
    createDiv.style.height = i * 10 + 20 + 'px';

    elements.push(createDiv);
  }

  boxesRef.append(...elements);
}

const destroyBoxes = () => {
  boxesRef.innerHTML = '';
  inputRef.value=''
};

buttonDestroyRef.addEventListener('click', destroyBoxes);