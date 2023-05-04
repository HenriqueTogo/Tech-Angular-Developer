/* Calcular o valor de uma viagem
 1 - Preço do combustível
 2 - Consumo médio de combustível
 3 - Distância da viagem
*/

const precoCombustivel = 5.79; // R$/L
const consumoMedio = 15; // KM/L
const distancia = 1580; // KM 

let precoViagem = (precoCombustivel / consumoMedio) * distancia;

console.log(precoViagem.toFixed(2));
