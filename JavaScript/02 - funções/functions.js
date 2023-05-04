function square(number) {
    return number * number;
}

function applyDiscount(price, percentage) {
    return price * (1-percentage/100);
}

(function () {
    console.log('Função imediatamente invocada');
})();

var numberSquared = square(2);
var price = 200;
var percentage = 15; 

console.log(numberSquared);
console.log(applyDiscount(price, percentage));