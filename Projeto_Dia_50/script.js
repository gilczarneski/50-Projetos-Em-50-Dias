const janelas = document.querySelectorAll('.janela');
const escolher_inseto_btns = document.querySelectorAll('.escolher-inseto-btn');
const iniciar_btn = document.getElementById('iniciar-btn')
const game_container = document.getElementById('game-container')
const tempoEl = document.getElementById('tempo')
const pontuacaoEl = document.getElementById('pontuacao')
const menssagem = document.getElementById('menssagem')
let segundos = 0
let pontuacao = 0
let inseto_selecionado = {}

iniciar_btn.addEventListener('click', () => janelas[0].classList.add('subir'))

escolher_inseto_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        inseto_selecionado = { src, alt }
        janelas[1].classList.add('subir')
        setTimeout(criarInseto, 1000)
        iniciarJogo()
    })
})

function iniciarJogo() {
    setInterval(incrementarTempo, 1000)
}

function incrementarTempo() {
    let m = Math.floor(segundos / 60)
    let s = segundos % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    tempoEl.innerHTML = `Tempo: ${m}:${s}`
    segundos++
}

function criarInseto() {
    const inseto = document.createElement('div')
    inseto.classList.add('inseto')
    const { x, y } = posicaoAleatoria()
    inseto.style.top = `${y}px`
    inseto.style.left = `${x}px`
    inseto.innerHTML = `<img src="${inseto_selecionado.src}" alt="${inseto_selecionado.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    inseto.addEventListener('click', pegarInseto)

    game_container.appendChild(inseto)
}

function posicaoAleatoria() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function pegarInseto() {
    incrementarPontuacao()
    this.classList.add('pego')
    setTimeout(() => this.remove(), 2000)
    adicionarInsetos()
}

function adicionarInsetos() {
    setTimeout(criarInseto, 1000)
    setTimeout(criarInseto, 1500)
}

function incrementarPontuacao() {
    pontuacao++
    if(pontuacao > 15) {
        menssagem.classList.add('visivel')
    }
    pontuacaoEl.innerHTML = `Pontuação: ${pontuacao}`
}