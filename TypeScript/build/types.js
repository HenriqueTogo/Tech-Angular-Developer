"use strict";
// tipos primitivos: boolean, number, string
let ligado = true;
let nome = 'Henrique';
let idade = 5.36;
// tipos especiais: null, undefined
let nulo = null;
let indefinido = undefined;
// tipos abrangentes: any, void
let qualquer = 5.36;
let retorno;
// objeto - sem previsibilidade
let produto = {
    name: 'Henrique',
    country: 'Brasil',
    age: 23
};
let myProduct = {
    name: 'Shoes',
    price: 35,
    quantity: 1
};
// Arrays
let dados = ['Henrique', 'Felipe', 'Ana'];
let dados2 = ['Henrique', 'Felipe', 'Ana'];
let infos = ['Henrique', 'Felipe', 'Ana', 1, 5];
// Tuples
let boleto = ["Água", 199.9, 3256953];
// Array methods
dados.push("Isabela");
let aniversario = new Date("2023-05-22 17:02");
console.log(aniversario.toString());
