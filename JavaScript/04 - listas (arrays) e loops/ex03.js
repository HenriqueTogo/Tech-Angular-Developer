// 3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V".

const nomes = ['Valéria', 'Henrique', 'Vanessa', 'João'];

for (let i = 0; i < nomes.length; i++) {
   if (nomes[i].charAt(0) === 'V'){
      console.log(nomes[i]);
   }
}