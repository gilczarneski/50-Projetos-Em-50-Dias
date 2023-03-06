const container = document.getElementById('container')
const cores = ['#e74c3c', '#8e44ad', '#3498db', '#ffffff', '#2ecc71']
const quadrados = 700

for(let i = 0; i < quadrados; i++) {
  const quadrado = document.createElement('div')
  quadrado.classList.add('quadrado')

  quadrado.addEventListener('mouseover', () => definirCor(quadrado))

  quadrado.addEventListener('mouseout', () => removerCor(quadrado))

  container.appendChild(quadrado)
}

function definirCor(element){
  const cor = pegarCorAleatoria()
  element.style.background = cor
  element.style.boxShadow = `0 0 2px ${cor}, 0 0 10px ${cor}`
}

function removerCor(element){
  element.style.background = '#00565f'
  element.style.boxShadow = `0 0 2px #000`
}

function pegarCorAleatoria (){
  return cores[Math.floor(Math.random() * cores.length)]
}