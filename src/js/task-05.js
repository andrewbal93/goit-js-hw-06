const inputElement = document.querySelector('#name-input')
const outputElement = document.querySelector('#name-output')

inputElement.addEventListener('input', function () {
    if (inputElement.value === "") 
        outputElement.textContent = "Anonymous";
    else
        outputElement.textContent = inputElement.value;
})