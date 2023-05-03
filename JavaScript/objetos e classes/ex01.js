// 1) Crie uma classe para representar carros. 
// Os carros possuem uma marca, uma cor e um consumo dado em km/L.
// Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
// gasto em reais para realizar este percurso.

class Carro {
  
    constructor (marca, cor, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.consumo = consumo;
    }

    getPrecoViagem(km, precoCombustivel) {
        return (precoCombustivel / this.consumo) * km
    }
}

const ferrari488 = new Carro('Ferrari', 'Vermelho', 8);
console.log(ferrari488.getPrecoViagem(100, 5));