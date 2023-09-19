function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const BtnElement = document.querySelector('.change-color')
const ColorElement = document.querySelector('.color')

BtnElement.addEventListener('click', () => {
  const randomColor = getRandomHexColor()
  ColorElement.textContent = randomColor
  document.body.style.backgroundColor = randomColor
})
