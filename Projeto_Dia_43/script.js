const avaliacao_usuario = document.querySelectorAll('.avaliacao')
const container_Avaliacao = document.querySelector('.containerAvaliacao')
const btnEnviar = document.querySelector('#enviar')
const painel = document.querySelector('#painel')
let selectedRating = ''

container_Avaliacao.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('avaliacao') && e.target.nextElementSibling) {
        removerAtivo()
        e.target.parentNode.classList.add('ativo')
        selectedRating = e.target.nextElementSibling.innerHTML
    } else if(
        e.target.parentNode.classList.contains('avaliacao') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removerAtivo()
        e.target.parentNode.classList.add('ativo')
        selectedRating = e.target.innerHTML
    }

})

btnEnviar.addEventListener('click', (e) => {
    painel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Obrigado!</strong>
        <br>
        <strong>A sua avaliação foi: ${selectedRating}</strong>
        <p>Usaremos a sua avaliação para melhorar o nosso serviço de atendimento ao cliente.</p>
    `
})

function removerAtivo() {
    for(let i = 0; i < avaliacao_usuario.length; i++) {
        avaliacao_usuario[i].classList.remove('ativo')
    }
}