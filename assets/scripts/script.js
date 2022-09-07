
let planetas = []
var nomeplaneta = document.querySelector('#nomeplaneta')
var ordemplaneta = document.querySelector('#ordem')
var tempplaneta = document.querySelector('#temperatura')
var sateliteplaneta = document.querySelector('#satelites')
var raioplaneta = document.querySelector('#raio')
var diaplaneta = document.querySelector('#tempodia')
var anoplaneta = document.querySelector('#tempoano')
var imagemplaneta = document.querySelector('#imagem_planeta')

const botaomercurio = document.querySelector('#mercurio')
const botaovenus = document.querySelector('#venus')
const botaoterra = document.querySelector('#terra')
const botaomarte = document.querySelector('#marte')
const botaojupter = document.querySelector('#jupter')
const botaosaturno = document.querySelector('#saturno')
const botaourano = document.querySelector('#urano')
const botaonetuno = document.querySelector('#netuno')
const botaoplutao = document.querySelector('#plutao')


const endpointDaAPI = 'http://localhost:3000/planetas'

getBuscarPlanetasAPI()

async function getBuscarPlanetasAPI() {
    const res = await fetch(endpointDaAPI)
    planetas = await res.json()
    planetas.forEach(planeta => nomeplaneta.innerHTML = planeta.terra.name)
    planetas.forEach(planeta => ordemplaneta.innerHTML = planeta.terra.id)
    planetas.forEach(planeta => tempplaneta.innerHTML = planeta.terra.temp)
    planetas.forEach(planeta => sateliteplaneta.innerHTML = planeta.terra.satnat)
    planetas.forEach(planeta => raioplaneta.innerHTML = planeta.terra.rad)
    planetas.forEach(planeta => diaplaneta.innerHTML = planeta.terra.daytime)
    planetas.forEach(planeta => anoplaneta.innerHTML = planeta.terra.revtime)

}

botaomercurio.addEventListener('click', () => {
    planetas.forEach(planeta => nomeplaneta.innerHTML = planeta.mercurio.name)
    planetas.forEach(planeta => ordemplaneta.innerHTML = planeta.mercurio.id)
    planetas.forEach(planeta => tempplaneta.innerHTML = planeta.mercurio.temp)
    planetas.forEach(planeta => sateliteplaneta.innerHTML = planeta.mercurio.satnat)
    planetas.forEach(planeta => raioplaneta.innerHTML = planeta.mercurio.rad)
    planetas.forEach(planeta => diaplaneta.innerHTML = planeta.mercurio.daytime)
    planetas.forEach(planeta => anoplaneta.innerHTML = planeta.mercurio.revtime)
})

botaovenus.addEventListener('click', () => {
    planetas.forEach(planeta => nomeplaneta.innerHTML = planeta.venus.name)
    planetas.forEach(planeta => ordemplaneta.innerHTML = planeta.venus.id)
    planetas.forEach(planeta => tempplaneta.innerHTML = planeta.venus.temp)
    planetas.forEach(planeta => sateliteplaneta.innerHTML = planeta.venus.satnat)
    planetas.forEach(planeta => raioplaneta.innerHTML = planeta.venus.rad)
    planetas.forEach(planeta => diaplaneta.innerHTML = planeta.venus.daytime)
    planetas.forEach(planeta => anoplaneta.innerHTML = planeta.venus.revtime)
})

botaoterra.addEventListener('click', () => {
    planetas.forEach(planeta => nomeplaneta.innerHTML = planeta.terra.name)
    planetas.forEach(planeta => ordemplaneta.innerHTML = planeta.terra.id)
    planetas.forEach(planeta => tempplaneta.innerHTML = planeta.terra.temp)
    planetas.forEach(planeta => sateliteplaneta.innerHTML = planeta.terra.satnat)
    planetas.forEach(planeta => raioplaneta.innerHTML = planeta.terra.rad)
    planetas.forEach(planeta => diaplaneta.innerHTML = planeta.terra.daytime)
    planetas.forEach(planeta => anoplaneta.innerHTML = planeta.terra.revtime)
})

botaomarte.addEventListener('click', () => {
    planetas.forEach(planeta => nomeplaneta.innerHTML = planeta.marte.name)
    planetas.forEach(planeta => ordemplaneta.innerHTML = planeta.marte.id)
    planetas.forEach(planeta => tempplaneta.innerHTML = planeta.marte.temp)
    planetas.forEach(planeta => sateliteplaneta.innerHTML = planeta.marte.satnat)
    planetas.forEach(planeta => raioplaneta.innerHTML = planeta.marte.rad)
    planetas.forEach(planeta => diaplaneta.innerHTML = planeta.marte.daytime)
    planetas.forEach(planeta => anoplaneta.innerHTML = planeta.marte.revtime)
})

botaojupter.addEventListener('click', () => {
    planetas.forEach(planeta => nomeplaneta.innerHTML = planeta.jupter.name)
    planetas.forEach(planeta => ordemplaneta.innerHTML = planeta.jupter.id)
    planetas.forEach(planeta => tempplaneta.innerHTML = planeta.jupter.temp)
    planetas.forEach(planeta => sateliteplaneta.innerHTML = planeta.jupter.satnat)
    planetas.forEach(planeta => raioplaneta.innerHTML = planeta.jupter.rad)
    planetas.forEach(planeta => diaplaneta.innerHTML = planeta.jupter.daytime)
    planetas.forEach(planeta => anoplaneta.innerHTML = planeta.jupter.revtime)
})

botaosaturno.addEventListener('click', () => {
    planetas.forEach(planeta => nomeplaneta.innerHTML = planeta.saturno.name)
    planetas.forEach(planeta => ordemplaneta.innerHTML = planeta.saturno.id)
    planetas.forEach(planeta => tempplaneta.innerHTML = planeta.saturno.temp)
    planetas.forEach(planeta => sateliteplaneta.innerHTML = planeta.saturno.satnat)
    planetas.forEach(planeta => raioplaneta.innerHTML = planeta.saturno.rad)
    planetas.forEach(planeta => diaplaneta.innerHTML = planeta.saturno.daytime)
    planetas.forEach(planeta => anoplaneta.innerHTML = planeta.saturno.revtime)
})

botaourano.addEventListener('click', () => {
    planetas.forEach(planeta => nomeplaneta.innerHTML = planeta.urano.name)
    planetas.forEach(planeta => ordemplaneta.innerHTML = planeta.urano.id)
    planetas.forEach(planeta => tempplaneta.innerHTML = planeta.urano.temp)
    planetas.forEach(planeta => sateliteplaneta.innerHTML = planeta.urano.satnat)
    planetas.forEach(planeta => raioplaneta.innerHTML = planeta.urano.rad)
    planetas.forEach(planeta => diaplaneta.innerHTML = planeta.urano.daytime)
    planetas.forEach(planeta => anoplaneta.innerHTML = planeta.urano.revtime)
})

botaonetuno.addEventListener('click', () => {
    planetas.forEach(planeta => nomeplaneta.innerHTML = planeta.netuno.name)
    planetas.forEach(planeta => ordemplaneta.innerHTML = planeta.netuno.id)
    planetas.forEach(planeta => tempplaneta.innerHTML = planeta.netuno.temp)
    planetas.forEach(planeta => sateliteplaneta.innerHTML = planeta.netuno.satnat)
    planetas.forEach(planeta => raioplaneta.innerHTML = planeta.netuno.rad)
    planetas.forEach(planeta => diaplaneta.innerHTML = planeta.netuno.daytime)
    planetas.forEach(planeta => anoplaneta.innerHTML = planeta.netuno.revtime)
})

botaoplutao.addEventListener('click', () => {
    planetas.forEach(planeta => nomeplaneta.innerHTML = planeta.plutao.name)
    planetas.forEach(planeta => ordemplaneta.innerHTML = planeta.plutao.id)
    planetas.forEach(planeta => tempplaneta.innerHTML = planeta.plutao.temp)
    planetas.forEach(planeta => sateliteplaneta.innerHTML = planeta.plutao.satnat)
    planetas.forEach(planeta => raioplaneta.innerHTML = planeta.plutao.rad)
    planetas.forEach(planeta => diaplaneta.innerHTML = planeta.plutao.daytime)
    planetas.forEach(planeta => anoplaneta.innerHTML = planeta.plutao.revtime)
})
