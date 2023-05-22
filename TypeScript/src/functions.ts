function addNumber(x: number, y: number): number{
    return x + y;
}

function addHello(name: string): string{
    return "Hello " + name;
}

function callToPhone(phone: string|number):number | string{
    return phone;
}

async function getDatabase(id: number): Promise<number|string> {
    return "felipe";
}

let soma: number = addNumber(4, 7);
let hello: string = addHello("Henrique");
console.log(soma);
console.log(hello);

