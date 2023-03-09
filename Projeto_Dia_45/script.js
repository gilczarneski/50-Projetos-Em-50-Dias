const mostrar_btn = document.querySelector('.mostrar-btn')
const fechar_btn = document.querySelector('.fechar-btn')
const nav = document.querySelectorAll('.nav')

mostrar_btn.addEventListener('click', () => {
    nav.forEach(nav => nav.classList.add('visivel'))
})

fechar_btn.addEventListener('click', () => {
    nav.forEach(nav => nav.classList.remove('visivel'))
})