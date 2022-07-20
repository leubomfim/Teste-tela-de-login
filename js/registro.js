const username = document.querySelector('#nome')
const email = document.querySelector('#email')
const password = document.querySelector('#senha')
const passwordTwo = document.querySelector('#senha-confirmar')
const form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    checkInputs()
    if(password.value === passwordTwo.value && username.value.length > 2){
        saveClient()
        window.location = 'login.html'
    }
})

const getLocal = () => JSON.parse(localStorage.getItem('account')) ?? []
const saveStorage = (account) =>  {
    localStorage.setItem('account', JSON.stringify(account))
}

const checkInputs = () => {
    const nameValue = username.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const passwordTwoValue = passwordTwo.value.trim()

    if(nameValue === '') {

        errorValidation(username, 'Preencha este campo')
    } else if (nameValue.length < 3) {
        errorValidation(username, 'O usuario deve ter mais de 2 caracteres')
    } else {
        successValidation(username)
    }

    if(emailValue === '') {
        errorValidation(email, 'Preencha este campo')
    } else {
        successValidation(email)
    }

    if(passwordValue === '') {
        errorValidation(password, 'Preencha este campo')
    } else if(passwordValue.length < 8) {
        errorValidation(password, 'A senha deve ter mais de 8 caracteres')
    } else {
        successValidation(password)
    }

    if(passwordTwoValue === '') {
        errorValidation(passwordTwo, 'Preencha este campo')
    } else if(passwordValue !== passwordTwoValue) {
        errorValidation(passwordTwo, 'As senhas não estão diferentes')
    } else {
        successValidation(passwordTwo)
    }

}

const errorValidation = (input, message) => {
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

const successValidation = (input) => {
    const formControl = input.parentElement
    
    formControl.className = 'form-control success'
}

const saveClient = () => {
    const account = {
        name: username.value.trim(),
        email: email.value.trim(),
        password: password.value.trim()
    }

    addAccount(account)
}

const addAccount = (account) => {
    const dbConta = getLocal()
    dbConta.push(account)
    saveStorage(dbConta)
}