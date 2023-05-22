// tipos primitivos: boolean, number, string

let ligado: boolean = true;
let nome: string = 'Henrique';
let idade: number = 5.36;

// tipos especiais: null, undefined

let nulo: null = null;
let indefinido: undefined = undefined;

// tipos abrangentes: any, void

let qualquer: any = 5.36;
let retorno: void;

// objeto - sem previsibilidade

let produto: object = {
    name: 'Henrique',
    country: 'Brasil',
    age: 23
};

type produtoLoja = {
    name: string;
    price: number;
    quantity: number;
}

let myProduct: produtoLoja = {
    name: 'Shoes',
    price: 35,
    quantity: 1
}

// Arrays

let dados : string[] = ['Henrique', 'Felipe', 'Ana'];
let dados2 : Array<string> = ['Henrique', 'Felipe', 'Ana'];
let infos: (string|number)[] = ['Henrique', 'Felipe', 'Ana', 1, 5];

// Tuples

let boleto:[string, number, number] = ["Água", 199.9, 3256953];

// Array methods

dados.push("Isabela");

let aniversario: Date = new Date("2023-05-22 17:02");
console.log(aniversario.toString());
