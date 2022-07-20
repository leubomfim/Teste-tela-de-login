const menuToggle = document.querySelector('.menu-toggle')
const userMenu = document.querySelector('.user-menu')
const nome = document.querySelector('.nome')
const alterarCadastro = document.querySelector('.alterar-cadastro')
const modalContainer = document.querySelector('.modal__container')
const alterarBtn = document.querySelector('.alterar')
const cancelarBtn = document.querySelector('.cancelar')
const inputEmail = document.querySelector('#email')
const inputSenha = document.querySelector('#senha')

const nomeUsuario = JSON.parse(localStorage.getItem('ccount'))

nomeUsuario.forEach(e => {
    nome.innerHTML = nomeUsuario.nome.length < 10 ? nomeUsuario.nome : nomeUsuario.nome.substring(0, 10) + '...'
})

menuToggle.addEventListener('click', () => {
    userMenu.classList.toggle('active')
})

alterarBtn.addEventListener('click', () => {
    if(nomeUsuario.nome === nome.innerHTML) {
        localStorage.setItem('account', JSON.stringify({nome: nome.innerHTML, email: inputEmail.value, senha: inputSenha.value }))
    }

    modalContainer.style.display = 'none'
})

cancelarBtn.addEventListener('click', () => {
    modalContainer.style.display = 'none'
})

alterarCadastro.addEventListener('click', () => {
    modalContainer.style.display = 'flex'
})

document.querySelector('.sair').addEventListener('click', () => {
    nome.innerHTML = ''
    window.location = '../home.html'
})