const canvas = document.getElementById('canvas');
const aumentarBtn = document.getElementById('aumentar');
const diminuirBtn = document.getElementById('diminuir');
const tamanhoEL = document.getElementById('tamanho');
const corEl = document.getElementById('cor');
const limparEl = document.getElementById('limpar');

const ctx = canvas.getContext('2d');

let tamanho = 20;
let precionado = false;
corEl.value= 'black'
let cor = corEl.value
let x 
let y

canvas.addEventListener('mousedown', (e) => {
  precionado = true

  x = e.offsetX
  y = e.offsetY
})

canvas.addEventListener('mouseup', (e) => {
  precionado = false

  x = undefined
  y = undefined
})

canvas.addEventListener('mousemove', (e) => {
  if(precionado){
    const x2 = e.offsetX
    const y2 = e.offsetY

    desenharCirculo(x2, y2)
    desenharLinha(x, y, x2, y2)

    x = x2
    y = y2
  }
})

function desenharCirculo(x, y){
  ctx.beginPath();
  ctx.arc(x, y, tamanho, 0, Math.PI * 2)
  ctx.fillStyle = cor
  ctx.fill()
}

function desenharLinha(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1)
  ctx.lineTo(x2, y2)
  ctx.strokeStyle = cor
  ctx.lineWidth = tamanho * 2
  ctx.stroke()
}

function atualizarTamanhoTela() {
  tamanhoEL.innerText = tamanho
}

aumentarBtn.addEventListener('click', () => {
  tamanho += 5

  if(tamanho > 50) {
      tamanho = 50
  }

  atualizarTamanhoTela()
})

diminuirBtn.addEventListener('click', () => {
  tamanho -= 5

  if(tamanho < 5) {
      tamanho = 5
  }

  atualizarTamanhoTela()
})

corEl.addEventListener('change', (e) => cor = e.target.value)

limparEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))