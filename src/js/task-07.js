const textElement = document.querySelector('#text')
const rangeElement = document.querySelector('#font-size-control')

//Исправил начальное значение регулятора, чтобы не было резкого скачка при изменении.
rangeElement.value = parseInt(getComputedStyle(textElement).fontSize)

rangeElement.addEventListener('input', function () {
    textElement.style.fontSize = rangeElement.value + "px"
})
