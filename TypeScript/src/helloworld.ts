type hero = {
    name: string;
    heroName: string;
};

function printObject(pessoa: hero){
    console.log("Hello World");
}

printObject({
    name: 'Bruce Wayne',
    heroName: 'Batman'
})
