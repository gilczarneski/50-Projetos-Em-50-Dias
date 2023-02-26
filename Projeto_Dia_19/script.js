const horasEl = document.querySelector('.horas')
const minutosEl = document.querySelector('.minutos')
const segundosEl = document.querySelector('.segundos')
const tempoEl = document.querySelector('.tempo')
const diaEl = document.querySelector('.dia')
const alterar = document.querySelector('.alterar')

const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

alterar.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  if(html.classList.contains('escuro')) {
    html.classList.remove('escuro')
    e.target.innerHTML = 'Modo escuro'
  } else {
    html.classList.add('escuro')
    e.target.innerHTML = 'Modo claro'
  }
})

function definirHorario() {
  const tempo = new Date();
  const mes = tempo.getMonth()
  const dia = tempo.getDay()
  const diaMes = tempo.getDate()
  const horas = tempo.getHours()
  const horasParaRelogio = horas
  const minutos = tempo.getMinutes ()
  const segundos = tempo.getSeconds ()

  horasEl.style.transform = `translate(-50%, -100%) rotate(${escala(horasParaRelogio, 0, 11, 0, 360)}deg)`

  minutosEl.style.transform = `translate(-50%, -100%) rotate(${escala(minutos, 0, 59, 0, 360)}deg)`

  segundosEl.style.transform = `translate(-50%, -100%) rotate(${escala(segundos, 0, 59, 0, 360)}deg)`

  tempoEl.innerHTML = `${horasParaRelogio}:${minutos< 10 ?`0${minutos}` : minutos}:${segundos< 10 ?`0${segundos}` : segundos}`

  diaEl.innerHTML = `${dias[dia]}, ${meses[mes]} <span class="circulo">${diaMes}</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const escala = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

definirHorario()

setInterval(definirHorario, 1000)