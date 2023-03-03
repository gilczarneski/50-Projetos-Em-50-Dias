const resultoEl = document.getElementById('resultado')
const tamanhoEl = document.getElementById('tamanho')
const maiusculaEl = document.getElementById('maiuscula')
const minusculaEl = document.getElementById('minuscula')
const numerosEl = document.getElementById('numero')
const simbolosEl = document.getElementById('simbolo')
const criarEl = document.getElementById('criar')
const clipboardEl = document.getElementById('clipboard')

const funcaoAleatoria = {
    minuscula: obterMinusculaAleatoria,
    maiuscula: obterMaiusculaAleatoria,
    numero: obterNumeroAleatorio,
    simbolo: obterSimboloAleatorio
}

clipboardEl.addEventListener('click', () => {
    const senha = resultoEl.innerText;
  if (!senha) {
    return;
  }
  navigator.clipboard.writeText(senha);
    alert('Senha copiada para área de transferência!')
})

criarEl.addEventListener('click', () => {
    const tamanho = +tamanhoEl.value
    const comMinuscula = minusculaEl.checked
    const comMaiuscula = maiusculaEl.checked
    const comNumero = numerosEl.checked
    const comSimbolo = simbolosEl.checked

    resultoEl.innerText = criarSenha(comMinuscula, comMaiuscula, comNumero, comSimbolo, tamanho)
})

function criarSenha(minuscula, maiuscula, numero, simbolo, tamanho) {
    let gerarSenha = ''
    const controleTipos = minuscula + maiuscula + numero + simbolo
    const tiposArray = [{minuscula}, {maiuscula}, {numero}, {simbolo}].filter(item => Object.values(item)[0])
    
    if(controleTipos === 0) {
        return ''
    }

    for(let i = 0; i < tamanho; i += controleTipos) {
        tiposArray.forEach(type => {
            const nomeFuncao = Object.keys(type)[0]
            gerarSenha += funcaoAleatoria[nomeFuncao]()
        })
    }

    const senhaFinalizada = gerarSenha.slice(0, tamanho)

    return senhaFinalizada
}

function obterMinusculaAleatoria() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function obterMaiusculaAleatoria() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function obterNumeroAleatorio() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function obterSimboloAleatorio() {
    const simbolos = '!@#$%^&*(){}[]=<>/,.'
    return simbolos[Math.floor(Math.random() * simbolos.length)]
}