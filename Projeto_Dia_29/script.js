const curtida = document.querySelector('.curtida')
const vezes = document.querySelector('#vezes')

let tempoClique = 0
let vezesCurtida = 0

curtida.addEventListener('click', (e) => {
    if(tempoClique === 0) {
        tempoClique = new Date().getTime()
    } else {
        if((new Date().getTime() - tempoClique) < 800) {
            criarCurtida(e)
            tempoClique = 0
        } else {
            tempoClique = new Date().getTime()
        }
    }
})

const criarCurtida = (e) => {
    const coracao = document.createElement('i')
    coracao.classList.add('fas')
    coracao.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const pontoEsquerdo = e.target.offsetLeft
    const pontoSuperior = e.target.offsetTop

    const xInterno = x - pontoEsquerdo
    const yInterno = y - pontoSuperior

    coracao.style.top = `${yInterno}px`
    coracao.style.left = `${xInterno}px`

    curtida.appendChild(coracao)

    vezes.innerHTML = ++vezesCurtida

    setTimeout(() => coracao.remove(), 1000)
}