const botaoAdicionar = document.getElementById('adicionar')

const notas = JSON.parse(localStorage.getItem('notas'))

if(notas) {
  notas.forEach(nota => adicionarNovaNota(nota))
}

botaoAdicionar.addEventListener('click', () => adicionarNovaNota())

function adicionarNovaNota(texto = ''){
  const nota =document.createElement('div')
  nota.classList.add('nota')

  nota.innerHTML = `
  <div class="ferramentas">
    <button class="editar"><i class="fas fa-edit"></i></button>
    <button class="deletar"><i class="fas fa-trash-alt"></i></button>
  </div>

  <div class="main ${texto ? "" : "oculto"}"></div>
  <textarea class="${texto ? "oculto" : ""}"></textarea>
  `

  const botaoEditar = nota.querySelector('.editar')
  const botaoDeletar = nota.querySelector('.deletar')
  const main = nota.querySelector('.main')
  const areaTexto = nota.querySelector('textarea')

  areaTexto.value = texto
  main.innerHTML = marked(texto)

  botaoDeletar.addEventListener('click', () => {
    nota.remove()

    atualizarLS()
  })

  botaoEditar.addEventListener('click', () => {
    main.classList.toggle('oculto')
    areaTexto.classList.toggle('oculto')
  })

  areaTexto.addEventListener('input', (e) => {
    const {value} = e.target

    main.innerHTML = marked(value)

    atualizarLS()
  })

  document.body.appendChild(nota)
}

function atualizarLS(){
  const textoDasNotas = document.querySelectorAll('textarea')

  const notas = []

  textoDasNotas.forEach(nota => notas.push(nota.value))

  localStorage.setItem('notas', JSON.stringify(notas))
}

