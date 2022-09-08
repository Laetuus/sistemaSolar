const principal = document.getElementById('tudo')
const endpointDaAPI = 'http://localhost:3000/planetas'
getBuscarPlanetas()

async function getBuscarPlanetas() {
    const res = await  fetch(endpointDaAPI)
    planetas = await res.json()
    exibirPlaneta(planetas)
}

function exibirPlaneta(planetas) {
    principal.innerHTML = ''

    planetas.forEach( planeta => {
        principal.innerHTML = `
    <img src="${planeta.img}" alt="Imagem do Planeta Selecionado" class="imagem_planeta">
    <span id="nomeplaneta">${planeta.name}</span>
    <h2 class="dados">Dados</h2>
    <ul class="listaplaneta">
        <li>
            <p>Ordem</p>
            <span id="ordem">${planeta.id}</span>
        </li>
        <li>
            <p>Temperatura</p>
            <span id="temperatura">${planeta.temp}</span>
        </li>
        <li>
            <p>Satelites</p>
            <span id="satelites">${planeta.satnat}</span>
        </li>
        <li>
            <p>Raio</p>
            <span id="raio">${planeta.rad}</span>
        </li>
        <li>
            <p>Tempo de Rotação</p>
            <span id="tempodia">${planeta.daytime}</span>
        </li>
        <li>
            <p>Período Orbital</p>
            <span id="tempoano">${planeta.revtime}</span>
        </li>
    </ul>
        `
    })
}


const botoes = document.querySelectorAll('.btn')
botoes.forEach( btn => btn.addEventListener('click', filtrarPlaneta))

function filtrarPlaneta() {
    const elementoBtn = document.getElementById(this.id)
    const nomePlaneta = elementoBtn.value
    let planetaSelecionado = filtrarPorNome(nomePlaneta)
    exibirPlaneta(planetaSelecionado)
}

function filtrarPorNome(nomePlaneta) {
    return planetas.filter( planeta => planeta.name == nomePlaneta)
}
