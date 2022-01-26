function randomBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

class Dog {

    // This dog object is set up similar, but it has a barkCounter instead of a meowCounter
    // and it ages at a different rate (7 for dog years)
    constructor(name, _age, favouriteFood) {
        this.name = name
        this.age = randomBetween(5, 10)
        this.favouriteFood = favouriteFood
        this.pastNames = []
        this.barkCounter = 0
    }

    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }
    
    getFavoriteFood() {
        return this.favouriteFood
    }
    
    setName (newName) {
        if (this.name) {
            (this.pastNames.push(this.name));
        } 
        this.name = newName;
    }

    getNames () {
        return this.pastNames;
    }

    getAverageNameLength() {
        return this.pastNames.join('').length/this.pastNames.length
    }

    setAge (newAge) {
        this.age = newAge
    }
    
    setFavoriteFood (newFavouriteFood) {
        this.favouriteFood = newFavouriteFood
    }

    // This dog ages every 7 times it barks, instead of the 5 for cats
    speak(words) {
        (words ? console.log(words) : console.log('bark'));
        this.barkCounter += 1;
        if (this.barkCounter >= 7) {
            this.barkCounter = 0;
            this.age++;
        }
    }
}

module.exports = Dog;