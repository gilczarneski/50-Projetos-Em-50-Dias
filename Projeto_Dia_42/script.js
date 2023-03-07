const resultado = document.getElementById('resultado')
const filtro = document.getElementById('filtro')
const listaItems = []

capturarData()

filtro.addEventListener('input', (e) => filtrarData(e.target.value))

async function capturarData() {
    const res = await fetch('https://randomuser.me/api?results=83')

    const { results } = await res.json()

    // Clear result
    resultado.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listaItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="informacao-usuario">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        resultado.appendChild(li)
    })
}

function filtrarData(searchTerm) {
    listaItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('oculto')
        } else {
            item.classList.add('oculto')
        }
    })
}