const contadores = document.querySelectorAll('.contador')

contadores.forEach(contador => {
    contador.innerText = '0'

    const updateCounter = () => {
        const meta = +contador.getAttribute('data-target')
        const c = +contador.innerText

        const incremento = meta / 300

        if(c < meta) {
            contador.innerText = `${Math.ceil(c + incremento)}`
            setTimeout(updateCounter, 1)
        } else {
            contador.innerText = meta
        }
    }

    updateCounter()
})