"use strict";
// Data modifiers (public, protected, private)
class Character {
    constructor(name, strength, skill) {
        this.name = name;
        this.strength = strength;
        this.skill = skill;
    }
    attack() {
        console.log(`Attack with ${this.strength} points`);
    }
}
const p1 = new Character('Ryu', 10, 98);
p1.attack();
// Wizard - Subclasse
class Wizard extends Character {
    constructor(name, strength, skill, magicPoints) {
        super(name, strength, skill);
        this.magicPoints = magicPoints;
    }
}
const p2 = new Wizard('Mago', 9, 30, 100);
