const form = document.querySelector('.form')
const email = document.querySelector('#email')
const btn = document.querySelector('.btn-login')
const password = document.querySelector('#password')

const passwordValue = password.value.trim()
const emailValue = email.value.trim()

console.log(password)
 
const account = JSON.parse(localStorage.getItem('account')) ?? []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    account.forEach((el) => {
        if(el.email === emailValue && el.password === passwordValue) {
            window.location = 'homeLogado.html'
        } else {
            alert('Dados incorretos!')
        }
    })

})