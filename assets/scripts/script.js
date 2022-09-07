
let planetas = []
var planetinha = document.querySelector('#nomeplaneta')
const endpointDaAPI = 'http://localhost:3000/planetas'

getBuscarPlanetasAPI()

async function getBuscarPlanetasAPI() {
    const res = await fetch(endpointDaAPI)
    planetas = await res.json()
    console.log(planetas)
    planetas.forEach(planeta => planetinha.innerHTML += planeta.name)
}
