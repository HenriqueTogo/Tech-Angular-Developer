const {gets} = require('./ex01_lib.js');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    numerosSorteados.push(gets());
}

for (let i = 0; i < numerosSorteados.length; i++) {
    if (i === 0) {
        var maiorNumero = numerosSorteados[0];
    } else if (numerosSorteados[i] > maiorNumero) {
        maiorNumero = numerosSorteados[i];
    }
}

console.log(maiorNumero);