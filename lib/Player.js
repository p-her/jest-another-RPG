
const Potion = require('../lib/Potion');
const Character = require('./Character');


class Player extends Character{

    constructor(name = ''){
    
        // call parent constructor 
        super(name);

        this.inventory = [new Potion('health'), new Potion()];
    };

// inherit prototype methods from Character here:
//Player.prototype = Object.create(Character.prototype);

// when using protype, you are only creating the method once
// on the constructor itself. New player objects simply inherit the method
// from the constructor rather than having their own instances of that method
// like 'this.getStats = function(){ }'
// return an object with varies player properties
getStats(){
    return{
        potions: this.inventory.length,
        health: this.health,
        strength: this.strength,
        agility: this.agility
    };
};

// returns the inventory array or false if empty
getInventory(){
    if(this.inventory.length){
        return this.inventory;
    }
    return false;
};

addPotion(potion){
    this.inventory.push(potion);
};


/* The .splice() method removes items from an array and returns the removed item(s) as
    a new array.  Thus, two things are happening here: the original inventory array has a
    single Potion removed at the specified index value and put into a new "removed items" array,
    then the Potion at index[0] of this "removed items" array is saved in a potion variable*/
usePotion (index) {
    const potion = this.getInventory().splice(index, 1)[0];

    switch(potion.name){
        case 'agility':
            this.agility += potion.value;
            break;
        case 'health':
            this.health += potion.value;
            break;
        case 'strength':
            this.strength += potion.value;
            break;
    }
}




}

module.exports = Player;