const esquerda = document.querySelector('.esquerda')
const direita = document.querySelector('.direita')
const container = document.querySelector('.container')

esquerda.addEventListener('mouseenter', () => container.classList.add('acima-esquerda'))
esquerda.addEventListener('mouseleave', () => container.classList.remove('acima-esquerda'))

direita.addEventListener('mouseenter', () => container.classList.add('acima-direita'))
direita.addEventListener('mouseleave', () => container.classList.remove('acima-direita'))