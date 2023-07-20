const form = document.querySelector('form')
const card = document.querySelector('.card')
const btnDismiss = document.querySelector('.button-scs')
const sucesso = document.querySelector('.sucessed')
const span = document.getElementById('span')

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    removeCard()
    const emailInput = form.querySelector('input[type="email"]')
    span.textContent = emailInput.value
    
})

btnDismiss.addEventListener('click', () => {
    removeSucesso()
})

function removeCard(){
    card.style.display = 'none'
    sucesso.style.display = 'flex'
}

function removeSucesso(){
    card.style.display = 'flex'
    sucesso.style.display = 'none'
}