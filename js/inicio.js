const menuToggle = document.querySelector('.menu-toggle')
const userMenu = document.querySelector('.user-menu')
const nome = document.querySelector('.nome')


const nomeUsuario = JSON.parse(localStorage.getItem('conta'))

nome.innerHTML = nomeUsuario.nome.length < 10 ? nomeUsuario.nome : nomeUsuario.nome.substring(0, 10) + '...'

menuToggle.addEventListener('click', () => {
    userMenu.classList.toggle('active')
})

document.querySelector('.sair').addEventListener('click', () => {
    nome.innerHTML = ''
    window.location = '../index.html'
})