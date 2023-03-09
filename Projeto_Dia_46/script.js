const quizDados = [
  {
      pergunta: "Qual linguagem roda no seu nevagador web (browser)?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correta: "d",
  },
  {
      pergunta: "O que CSS significa?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correta: "b",
  },
  {
      pergunta: "O que a sigla HTML significa?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correta: "a",
  },
  {
      pergunta: "Em qual ano o JavaScript foi lançado?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "Nenhuma das opções",
      correta: "b",
  },
];

const quiz = document.getElementById('quiz')
const respostaEls = document.querySelectorAll('.resposta')
const perguntaEl = document.getElementById('pergunta')
const texto_a = document.getElementById('texto_a')
const texto_b = document.getElementById('texto_b')
const texto_c = document.getElementById('texto_c')
const texto_d = document.getElementById('texto_d')
const enviarBtn = document.getElementById('enviar')

let perguntaAtual = 0
let pontuacao = 0

carregarPergunta ()

function carregarPergunta () {

  desmarcarResposta()

  const perguntaAtualDados = quizDados[perguntaAtual]

  perguntaEl.innerText = perguntaAtualDados.pergunta
  texto_a.innerText = perguntaAtualDados.a
  texto_b.innerText = perguntaAtualDados.b
  texto_c.innerText = perguntaAtualDados.c
  texto_d.innerText = perguntaAtualDados.d
}

function desmarcarResposta (){
  respostaEls.forEach(respostaEl => respostaEl.checked = false)  
}

function jaSelecionado (){
  let resposta

  respostaEls.forEach(respostaEl => {
    if (respostaEl.checked){
      resposta = respostaEl.id
    }
  })

  return resposta
}

enviarBtn.addEventListener('click', () => {
  const resposta = jaSelecionado()
  
  if(resposta) {
    if(resposta === quizDados[perguntaAtual].correta) {
      pontuacao++
    }
    
    perguntaAtual++

    if(perguntaAtual < quizDados.length){
      carregarPergunta()
    } else {
      quiz.innerHTML = `
      <h2>Você respondeu ${pontuacao}/${quizDados.length} perguntas corretamente</h2>
      <button onclick="location.reload()">Recomeçar</button>
      `
    }
  }
})