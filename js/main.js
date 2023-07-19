const controles = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const robotron = document.querySelector('.robo');
const botoes = document.querySelectorAll('[data-cor]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controles.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        calculaEstatisticas(evento.target.dataset.peca);
    })
})

botoes.forEach( (elemento) => {
    elemento.addEventListener('click', (evento) => {
        trocaDeCor(evento.target.dataset.cor);
    })
})

function manipulaDados(sinal, contador) {
    const peca = contador.querySelector('[data-contador]');

    if (sinal === '-') {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function calculaEstatisticas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
    })
}

function trocaDeCor(cor) {
    robotron.src = `img/Robotron 2000 - ${cor}.png`;
}