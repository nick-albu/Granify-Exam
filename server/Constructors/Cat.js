function randomBetween(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

class Cat {

    constructor(name, _age, favouriteFood) {
        this.name = name //The instructions ask for an optional initial name. The optional name is the name
        //passed through the constructor when creating a new Cat. 
        this.age = randomBetween(5, 10)
        this.favouriteFood = favouriteFood
        this.pastNames = []
        this.meowCounter = 0
        this.id = 1 //I'd use uniqID here to ensure no duplicates but I wasn't sure how involved to make this demo
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
    
    // I included an if statement in order to filter out the original
    // lack-of-name from a list of previous names
    // The ask was that this was a list of previous names, the new name is
    // not technically a previous name until it's replaced, so it's not included.
    // I also kept this here instead of adding it to the bottom to keep the document
    // organized and try to do this throughout

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

    speak(words) {
        (words ? console.log(words) : console.log('meow'));
        this.meowCounter += 1;
        if (this.meowCounter >= 5) {
            this.meowCounter = 0;
            this.age++;
        }
    }
}

module.exports = Cat;
