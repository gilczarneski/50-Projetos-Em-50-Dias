const imagens = document.getElementById('imagens')
const botaoEsquerdo = document.getElementById('esquerda')
const botaoDireito = document.getElementById('direita')

const img = document.querySelectorAll('#imagens img')

let indice = 0

let intervalo = setInterval(rodar, 2000)

function rodar() {
  indice++
  mudarImagem()
}

function mudarImagem() {
  if(indice > img.length - 1) {
      indice = 0
  } else if(indice < 0) {
      indice = img.length - 1
  }

  imagens.style.transform = `translateX(${-indice * 500}px)`
}

function resetarIntervalo() {
  clearInterval(intervalo)
  intervalo = setInterval(rodar, 2000)
}

botaoDireito.addEventListener('click', () => {
  indice++
  mudarImagem()
  resetarIntervalo()
})

botaoEsquerdo.addEventListener('click', () => {
  indice--
  mudarImagem()
  resetarIntervalo()
})