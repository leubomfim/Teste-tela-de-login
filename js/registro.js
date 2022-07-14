const inputName = document.querySelector('#nome')
const inputEmail = document.querySelector('#email')
const inputSenha = document.querySelector('#senha')


const registrarConta = (e) => {   
    const conta = {
        nome: inputName.value,
        email: inputEmail.value,
        senha: inputSenha.value
    }

    e.preventDefault()
    
    saveStorage(conta)
    window.location = 'login.html'
}

const saveStorage = (conta) => {
    localStorage.setItem('conta', JSON.stringify(conta))
}

document.querySelector('.form').addEventListener('submit', registrarConta)
