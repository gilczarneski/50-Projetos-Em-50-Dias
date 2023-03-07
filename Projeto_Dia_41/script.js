const codigos = document.querySelectorAll('.codigo')

codigos[0].focus()

codigos.forEach((codigo, indice) => {
    codigo.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <=9) {
            codigos[indice].value = ''
            setTimeout(() => codigos[indice + 1].focus(), 10)
        } else if(e.key === 'Backspace') {
            setTimeout(() => codigos[indice - 1].focus(), 10)
        }
    })
})