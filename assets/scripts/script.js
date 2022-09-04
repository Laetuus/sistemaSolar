const ordemplaneta = document.querySelector('.ordem');
const tempplaneta = document.querySelector('.temperatura');
const satnatural = document.querySelector('.satelites');
const raio = document.querySelector('.raio');
const tempodia = document.querySelector('.tempodia');
const tempoano = document.querySelector('.tempoano');


const fetchPlaneta = async () => {

    const APIResponse = await fetch(`http://localhost:3000/planetas`)

    const data = await APIResponse.json();

    console.log(data);


}
fetchPlaneta();