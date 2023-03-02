const btn = document.getElementById('btn')
const notificacoes = document.getElementById('notificacoes')

const mensagens = [
  'Mensagem um',
  'Mensagem dois',
  'Mensagem três',
  'Mensagem quatro',
]

const tipos = ['info', 'sucesso', 'erro']

btn.addEventListener('click', () => criarNotificacao())

function criarNotificacao(mensagem = null, tipo = null){
  const notif = document.createElement('div')
  notif.classList.add('notificacao')
  notif.classList.add(tipo ? tipo : selecionarTipoMensagem())

  notif.innerText = mensagem ? mensagem : selecionarMensagemQualquer()

  notificacoes.appendChild(notif)

  setTimeout(()=>{
    notif.remove()
  },3000)
}

function selecionarMensagemQualquer(){
  return mensagens[Math.floor(Math.random() * mensagens.length)]
}

function selecionarTipoMensagem(){
  return tipos[Math.floor(Math.random() * tipos.length)]
}
