class Pessoa {
    nome;
    idade;

    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    getInfo () {
        console.log(`Meu nome é ${this.nome}, eu tenho ${this.idade} anos.`);
    }
}

const henrique = new Pessoa('Henrique', 22);

const humberto = new Pessoa('Humberto', 42);

henrique.getInfo();
humberto.getInfo();

