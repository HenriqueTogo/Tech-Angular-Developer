// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// 0 - À vista Débito, recebe 10% de desconto;
// 1 - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// 2 - Em duas vezes, preço normal de etiqueta sem juros;
// 3 - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

const condPagamento = 3; 
var valorProduto = 100;

switch (condPagamento ){
    case 0:
        var preco = 0.9 * valorProduto;
        console.log('À vista Débito, recebe 10% de desconto');
        break;
    case 1:
        var preco = 0.85 * valorProduto;
        console.log('À vista no Dinheiro ou PIX, recebe 15% de desconto');
        break;
    case 2:
        var preco = valorProduto;
        console.log('Em duas vezes, preço normal de etiqueta sem juros');
        break;
    case 3:
        var preco = valorProduto * 1.1;
        console.log('Acima de duas vezes, preço normal de etiqueta mais juros de 10%');
        break;
}

console.log(`O preço final do produto é de R\$ ${preco.toFixed(2)}`);