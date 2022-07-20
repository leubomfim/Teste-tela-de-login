const menuToggle = document.querySelector('.menu-toggle')
const userMenu = document.querySelector('.user-menu')

menuToggle.addEventListener('click', () => {
    userMenu.classList.toggle('active')
})
