const form = document.querySelector('form')
const card = document.querySelector('.card')
const btnDismiss = document.querySelector('.button-scs')
const sucesso = document.querySelector('.sucessed')
const span = document.getElementById('span')
const input = form.querySelector('input[type="email"]')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateEmail()
    const emailInput = form.querySelector('input[type="email"]')
    const emailCapturado = emailInput.value
    span.textContent = emailCapturado
    
    
})


btnDismiss.addEventListener('click', () => {
    removeSucesso()
})

function removeCard() {
    card.style.display = 'none'
    sucesso.style.display = 'flex'
}

function removeSucesso() {
    card.style.display = 'flex'
    sucesso.style.display = 'none'
}

function validateEmail () {
    const email = document.getElementById("email").value;
    const errorMensage = document.querySelector(".error")
    let invalidEmail = /\S+@\S+\.\S+/;
    
    
    if(!invalidEmail.test(email)){
        errorMensage.style.display = "block"
        input.style.backgroundColor = "#f6adad"

    }else {
        removeCard()
        errorMensage.style.display = "none"
        input.style.backgroundColor = "white"
    }
    
}
