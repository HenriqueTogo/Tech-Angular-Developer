const pessoa = {
    nome: 'Henrique',
    idade: 22,
    altura: 170,
    info: function () {
        console.log(`Meu nome é ${this.nome}, eu tenho ${this.idade} anos.`);
    }
};

// pessoa.altura = 170; 

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);
pessoa.info();
console.log(pessoa['altura']);