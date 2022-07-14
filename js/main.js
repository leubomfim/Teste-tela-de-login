const form = document.querySelector('.form')
const btnEmailValidate = document.querySelector('#email')
const btn = document.querySelector('.btn-login')
const btnPasswordValidate = document.querySelector('#password')
 
const account = JSON.parse(localStorage.getItem('conta')) ?? []

btnEmailValidate.addEventListener('input', ({ target }) => {
    if(target.value.length > 0 && btnPasswordValidate.value.length > 6) {
        btn.removeAttribute('disabled')
        return
    } else {
        btn.setAttribute('disabled', '')
    }

    
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(account.email === btnEmailValidate.value && account.senha === btnPasswordValidate.value) {

        window.location = 'inicio.html'
    } else {
        alert('Dados incorretos!')
    }

})



