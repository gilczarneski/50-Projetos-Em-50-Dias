const conteudos = document.querySelectorAll('.conteudo')
const listaItems = document.querySelectorAll('nav ul li')

listaItems.forEach((item, indice) => {
    item.addEventListener('click', () => {
        esconderTodoConteudo()
        esconderTodoItem()

        item.classList.add('ativo')
        conteudos[indice].classList.add('mostrar')
    })
})

function esconderTodoConteudo() {
    conteudos.forEach(conteudo => conteudo.classList.remove('mostrar'))
}


function esconderTodoItem() {
    listaItems.forEach(item => item.classList.remove('ativo'))
}