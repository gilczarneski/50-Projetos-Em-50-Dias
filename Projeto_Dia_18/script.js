const body = document.body
const slides = document.querySelectorAll('.slide')
const BtnEsq = document.getElementById('esquerda')
const BtnDir = document.getElementById('direita')

let slideAtivo = 0

BtnDir.addEventListener('click', () => {
  slideAtivo++

  if (slideAtivo > slides.length - 1) {
    slideAtivo = 0
  }

  setBgToBody()
  setActiveSlide()
})

BtnEsq.addEventListener('click', () => {
  slideAtivo--

  if (slideAtivo < 0) {
    slideAtivo = slides.length - 1
  }

  setBgToBody()
  setActiveSlide()
})

setBgToBody()

function setBgToBody() {
  body.style.backgroundImage = slides[slideAtivo].style.backgroundImage
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove('ativo'))

  slides[slideAtivo].classList.add('ativo')
}
