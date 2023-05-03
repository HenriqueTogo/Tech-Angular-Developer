// 2) Crie uma classe para representar pessoas.
// Para cada pessoa teremos os atributos nome, peso e altura.
// As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
// Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
// do seu IMC

class Pessoa {
    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    getImc () {
        const imc = this.peso / (this.altura * this.altura);
        let classeImc;
        if (imc < 18.5){
            classeImc = 'Abaixo do peso';
        } else if (imc < 25) {
            classeImc = 'Peso normal';
        } else if (imc < 30) {
            classeImc = 'Acima do peso';
        } else if (imc < 40) {
            classeImc = 'Obeso';
        } else {
            classeImc = 'Obesidade grave';
        }
        return `Meu IMC é ${imc.toFixed(2)} e a sua classificação é ${classeImc}`
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose.getImc());