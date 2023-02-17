const pequenoscopos = document.querySelectorAll('.copo-pequeno')
const litros = document.getElementById('litros')
const percentual = document.getElementById('percentual')
const restante = document.getElementById('restante')

atualizacaoLitrao()

pequenoscopos.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx))
})

function highlightCups(idx) {
    if (idx===7 && pequenoscopos[idx].classList.contains("cheio")) idx--;
    else if(pequenoscopos[idx].classList.contains('cheio') && !pequenoscopos[idx].nextElementSibling.classList.contains('cheio')) {
        idx--
    }

    pequenoscopos.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('cheio')
        } else {
            cup.classList.remove('cheio')
        }
    })

    atualizacaoLitrao()
}

function atualizacaoLitrao() {
    const cheiocopo = document.querySelectorAll('.copo-pequeno.cheio').length
    const totalcopos = pequenoscopos.length

    if(cheiocopo === 0) {
        percentual.style.visibility = 'hidden'
        percentual.style.height = 0
    } else {
        percentual.style.visibility = 'visible'
        percentual.style.height = `${cheiocopo / totalcopos * 330}px`
        percentual.innerText = `${cheiocopo / totalcopos * 100}%`
    }

    if(cheiocopo === totalcopos) {
        restante.style.visibility = 'hidden'
        restante.style.height = 0
    } else {
        restante.style.visibility = 'visible'
        litros.innerText = `${2 - (250 * cheiocopo / 1000)}L`
    }
}