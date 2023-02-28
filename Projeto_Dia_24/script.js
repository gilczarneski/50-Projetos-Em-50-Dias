const header = document.getElementById('header')
const titulo = document.getElementById('titulo')
const trecho = document.getElementById('trecho')
const imgPerfil = document.getElementById('img-perfil')
const nome = document.getElementById('nome')
const data = document.getElementById('data')

const animado_bgs = document.querySelectorAll('.animado-bg')
const texto_animado_bgs = document.querySelectorAll('.texto-animado-bg')

const dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

setTimeout(getData, 2500)

function getData() {

  const tempo = new Date();
  const mes = tempo.getMonth()
  const dia = tempo.getDay()
  const diaMes = tempo.getDate()
  const ano = tempo.getFullYear()

  header.innerHTML =
    '<img src="/Códigos/Projeto_Dia_24/LogoCamaleão.png" alt="" />'
  titulo.innerHTML = 'Desenvolvedor Front-end'
  trecho.innerHTML =
    'Sou Gil Czarneski, desenvolvedor front-end, graduando em Técnologia de Informação pela UFMS e Pós-Graduando em JAVA pela UTFPR. Graduado em Eng. Produção pela UFPR.'
  imgPerfil.innerHTML =
    '<img src="/Códigos/Projeto_Dia_24/imagem-perfil.png" alt="" />'
  nome.innerHTML = 'Gil Czarneski'
  data.innerHTML = `${dias[dia]}, ${diaMes} ${meses[mes]} de ${ano}`

  animado_bgs.forEach((bg) => bg.classList.remove('animado-bg'))
  texto_animado_bgs.forEach((bg) => bg.classList.remove('texto-animado-bg'))
}