/* Calcular o valor de uma viagem
 1 - Preço do Etanol 
 2 - Preço da Gasolina
 3 - O tipo de combustível que está no carro
 3 - Consumo médio de combustível
 3 - Distância da viagem
*/

const precoEtanol = 3.5;
const precoGasolina = 5;
const isGasolina = false;
const consumoMedioGasolina = 15; // KM/L
const consumoMedioEtanol = 11; // KM/L
const distancia = 1580; // KM 

if (isGasolina) {
    var precoViagem = (precoGasolina / consumoMedioGasolina) * distancia;
} else {
    var precoViagem = (precoEtanol / consumoMedioEtanol) * distancia;

}

console.log(precoViagem.toFixed(2));
