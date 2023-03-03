const textoEl = document.getElementById('texto')
const velocidadeEl = document.getElementById('velocidade')
const textoPadrao = 'Se livre da maldição da programação com um "Olá Mundo!"'

let contador = 1
let velocidade = 300 / velocidadeEl.value

escreverTexto()

function escreverTexto() {
    textoEl.innerText = textoPadrao.slice(0, contador)

    contador++

    if(contador > textoPadrao.length) {
        contador = 1
    }

    setTimeout(escreverTexto, velocidade)
}


velocidadeEl.addEventListener('input', (e) => velocidade = 300 / e.target.value)