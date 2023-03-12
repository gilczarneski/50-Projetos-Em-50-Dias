const form = document.getElementById('form')
const input = document.getElementById('input')
const tarefasUL = document.getElementById('tarefas')

const tarefas = JSON.parse(localStorage.getItem('tarefas'))

if(tarefas) {
    tarefas.forEach(tarefa => adicionarTarefa(tarefa))
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    adicionarTarefa()
})

function adicionarTarefa(tarefa) {
    let tarefaTexto = input.value

    if(tarefa) {
        tarefaTexto = tarefa.text
    }

    if(tarefaTexto) {
        const tarefaEl = document.createElement('li')
        if(tarefa && tarefa.completa) {
            tarefaEl.classList.add('completa')
        }

        tarefaEl.innerText = tarefaTexto

        tarefaEl.addEventListener('click', () => {
            tarefaEl.classList.toggle('completa')
            atualizarMemoria()
        }) 

        tarefaEl.addEventListener('contextmenu', (e) => {
            e.preventDefault()

            tarefaEl.remove()
            atualizarMemoria()
        }) 

        tarefasUL.appendChild(tarefaEl)

        input.value = ''

        atualizarMemoria()
    }
}

function atualizarMemoria() {
    tarefasEl = document.querySelectorAll('li')

    const tarefas = []

    tarefasEl.forEach(tarefaEl => {
        tarefas.push({
            text: tarefaEl.innerText,
            completa: tarefaEl.classList.contains('completa')
        })
    })

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
}