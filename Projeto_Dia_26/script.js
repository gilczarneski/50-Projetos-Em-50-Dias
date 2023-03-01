const deslizadorContainer = document.querySelector('.deslizador-container')
const slideDireito = document.querySelector('.slide-direito')
const slideEsquerdo = document.querySelector('.slide-esquerdo')
const setaCima = document.querySelector('.setaCima')
const setaBaixo = document.querySelector('.setaBaixo')
const comprimentoSlides = slideDireito.querySelectorAll('div').length

let ativoSlideIndex = 0

slideEsquerdo.style.top = `-${(comprimentoSlides - 1) * 100}vh`

setaCima.addEventListener('click', () => mudarSlide('cima'))
setaBaixo.addEventListener('click', () => mudarSlide('baixo'))

const mudarSlide = (direcao) => {
  const alturaSlider = deslizadorContainer.clientHeight
  if(direcao === 'cima') {
      ativoSlideIndex++
      if(ativoSlideIndex > comprimentoSlides - 1) {
          ativoSlideIndex = 0
      }
  } else if(direcao === 'baixo') {
      ativoSlideIndex--
      if(ativoSlideIndex < 0) {
          ativoSlideIndex = comprimentoSlides - 1
      }
  }

  slideDireito.style.transform = `translateY(-${ativoSlideIndex * alturaSlider}px)`
  slideEsquerdo.style.transform = `translateY(${ativoSlideIndex * alturaSlider}px)`
}