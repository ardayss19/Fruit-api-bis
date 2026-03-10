const fruitsArray = require('../Fruits.json')

class FruitModel {
    constructor(fruit) {
        this.genus = fruit.genus;
        this.name = fruit.name;
        this.id = fruit.id;
        this.family = fruit.family;
        this.order = fruit.order;
        this.nutritions = fruit.nutritions;
    }

    static showAllFruits() {
        return fruitsArray.map(f => new FruitModel(f));
    }

    // 
    static showFruit(name) { // function to look at fruit by (name)
        const fruit = fruitsArray.filter (fruit => 
            fruit.name.toLowerCase().startsWith(name.toLowerCase())) 
    
        if (fruit.length > 0) {
            return fruit.map(f => new FruitModel(f)) 
        }else {
            throw "No fruits found with that name"
        }
    }


    static create(data) {
        const newFruit = data;
        console.log(newFruit) // this is only for debugging 

        newFruit["id"] = fruitsArray.length + 1; // 

        fruitsArray.push(newFruit);

        return new FruitModel (newFruit)
    }

    update(data) {
        const updateFruit = fruitsArray.find( 
            fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        if(updateFruit) {
            updateFruit.name = data.name
            return new FruitModel(updateFruit)
        }else {
            throw "Fruit not found"
        }
    }

}

module.exports = FruitModel;