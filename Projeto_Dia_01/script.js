const panels = document.querySelectorAll('.painel')

panels.forEach(painel => {
  painel.addEventListener('click', () => {
    removeActiveClasses()
    painel.classList.add('ativo')
  })
})

function removeActiveClasses() {
  panels.forEach(painel => {
    painel.classList.remove('ativo')
  })
}
