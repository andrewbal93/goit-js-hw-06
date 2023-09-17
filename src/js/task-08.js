const formElement = document.querySelector('.login-form')

formElement.addEventListener('submit', function (event) {
    event.preventDefault()

    const formData = new FormData(formElement)
    
    let filledForm = true
    formData.forEach(field => { if (!field) filledForm = false })
    
    if (!filledForm) alert("Не все поля заполнены")
    else {
        const dataObject = {}
        formData.forEach((value, index) => { dataObject[index] = value })
        
        console.log(dataObject)
        formElement.reset()
    }
})