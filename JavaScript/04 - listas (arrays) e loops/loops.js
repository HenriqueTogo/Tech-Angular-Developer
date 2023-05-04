const notas = [];

notas.push(2);
notas.push(7);
notas.push(6);
notas.push(10);
notas.push(3);
notas.push(6);

var somaNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}

console.log(somaNotas/notas.length);


