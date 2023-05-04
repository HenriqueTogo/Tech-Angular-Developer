let i = 0;
const lista = [5, 10, 50, 98, 23];

function gets () {
    const valor = lista[i];
    i++;
    return valor;
}

module.exports = {gets};