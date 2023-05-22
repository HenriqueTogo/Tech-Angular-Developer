// Data modifiers (public, protected, private)

class Character {
    private name?: string;
    strength: number;
    skill: number;

    constructor (name: string, strength: number, skill: number) {
        this.name = name;
        this. strength = strength;
        this.skill = skill;
    }

    attack() : void {
        console.log(`Attack with ${this.strength} points`);
        
    }
}

const p1 = new Character('Ryu', 10, 98);
p1.attack();


// Wizard - Subclasse
class Wizard extends Character {
    magicPoints : number;
    constructor(name: string, strength: number, skill: number, magicPoints: number){
        super(name, strength, skill)
        this.magicPoints = magicPoints;
    }
}

const p2 = new Wizard('Mago', 9, 30, 100);