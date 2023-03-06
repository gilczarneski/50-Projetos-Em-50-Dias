const numeros = document.querySelectorAll('.numeros span')
const contador = document.querySelector('.contador')
const menssagemFinal = document.querySelector('.final')
const replay = document.querySelector('#replay')

rodarAnimacao()

function resetarDOM() {
  contador.classList.remove('ocultar')
  menssagemFinal.classList.remove('mostrar')

  numeros.forEach((numero) => {
    numero.classList.value = ''
  })

  numeros[0].classList.add('aparecer')
}

function rodarAnimacao() {
  numeros.forEach((numero, indice) => {
    const proximoDoUltimo = numeros.length - 1

    numero.addEventListener('animationend', (e) => {
      if (e.animationName === 'aparecendo' && indice !== proximoDoUltimo) {
        numero.classList.remove('aparecer')
        numero.classList.add('desaparecer')
      } else if (e.animationName === 'desaparecendo' && numero.nextElementSibling) {
        numero.nextElementSibling.classList.add('aparecer')
      } else {
        contador.classList.add('ocultar')
        menssagemFinal.classList.add('mostrar')
      }
    })
  })
}

replay.addEventListener('click', () => {
  resetarDOM()
  rodarAnimacao()
})