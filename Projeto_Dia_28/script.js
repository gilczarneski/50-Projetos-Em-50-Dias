const APIURL = 'https://api.github.com/users/'

const principal = document.getElementById('principal')
const formulario = document.getElementById('formulario')
const pesquisa = document.getElementById('pesquisa')

async function obterUsuario(nomeusuario) {
    try {
        const { data } = await axios(APIURL + nomeusuario)

        criarCartaoUsuario(data)
        obterRepositorio(nomeusuario)
    } catch(erro) {
        if(erro.response.status == 404) {
            criarCartaoErro('Não foi encontrado um perfil com esse nome de usuário')
        }
    }
}

async function obterRepositorio(nomeusuario) {
    try {
        const { data } = await axios(APIURL + nomeusuario + '/repos?sort=created')

        adicionarRepositorioAoCartao(data)
    } catch(erro) {
        criarCartaoErro('Problema ao buscar repositórios')
    }
}

function criarCartaoUsuario(usuario) {
    const usuarioID = usuario.name || usuario.login
    const usuarioBio = usuario.bio ? `<p>${usuario.bio}</p>` : ''
    const cardHTML = `
    <div class="cartao">
    <div>
      <img src="${usuario.avatar_url}" alt="${usuario.name}" class="avatar">
    </div>
    <div class="info-usuario">
      <h2>${usuarioID}</h2>
      ${usuarioBio}
      <ul>
        <li>${usuario.followers} <strong>Followers</strong></li>
        <li>${usuario.following} <strong>Following</strong></li>
        <li>${usuario.public_repos} <strong>Repos</strong></li>
      </ul>
      <div id="repos"></div>
    </div>
  </div>
    `
    principal.innerHTML = cardHTML
    
}

function criarCartaoErro(msg) {
    const cardHTML = `
        <div class="cartao">
            <h1>${msg}</h1>
        </div>
    `

    principal.innerHTML = cardHTML
}

function adicionarRepositorioAoCartao(repos) {
    const reposEl = document.getElementById('repos')

    repos
        .slice(0, 4)
        .forEach(repo => {
            const repoEl = document.createElement('a')
            repoEl.classList.add('repos')
            repoEl.href = repo.html_url
            repoEl.target = '_blank'
            repoEl.innerText = repo.name

            reposEl.appendChild(repoEl)
        })
}

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const usuario = pesquisa.value

    if(usuario) {
        obterUsuario(usuario)

        pesquisa.value = ''
    }
})