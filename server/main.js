const Cat = require ('./Constructors/Cat');
const Dog = require ('./Constructors/Dog')

const cat = new Cat()

console.log ("Name is currently " + cat.getName())

cat.setName("Garfield")

console.log ("Name has been changed to " + cat.getName())

// I added this in to showcase the random age between 5-10
console.log("We found the cat when it was " + cat.getAge() + " years old.")

// Speak method without an optional argument
cat.speak();

// Speak method with an optional argument
cat.speak("I am a talking cat");

// I added some examples here for Part 2: Steps 5 and 6 to
cat.setName("Simba")

console.log ("Name has been changed to " + cat.getName())

console.log ("This cat's previous names are " + cat.getNames())

cat.setName("Tigger")

console.log ("Name has been changed to " + cat.getName())

console.log ("This cat's previous names are " + cat.getNames())

//Every 5 meows increases age by 1 (we've already meowed twice)
//at this point.

cat.speak();
console.log("The cat's age is " + cat.getAge())
cat.speak();
console.log("The cat's age is " + cat.getAge())
cat.speak();
console.log("The cat's age is " + cat.getAge())

// After this point we have just increased the cat's age by 1

cat.speak();
console.log("The cat's age is " + cat.getAge())
cat.speak();
console.log("The cat's age is " + cat.getAge())
cat.speak();
console.log("The cat's age is " + cat.getAge())
cat.speak();
console.log("The cat's age is " + cat.getAge())
cat.speak();
console.log("The cat's age is " + cat.getAge())

// And after 5 more meow's we see it increase again.
// I included console logs when it does not increase as well to show it's working.

//Garfield (8) + Simba (5) / 2 = 6.5 (expected outcome)
console.log ("The average length of past names is " + cat.getAverageNameLength())

//Here I'm changing our cat's name again to show that getAverageNameLength still works.
cat.setName("Megatron")

console.log ("Name has been changed to " + cat.getName())

console.log ("This cat's previous names are " + cat.getNames())

//Garfield (8) + Simba (5) + Tigger (6) / 3 = 6.5 (expected outcome 6.33~)
console.log ("The average length of past names is " + cat.getAverageNameLength())

//Showing off our new Dog object with necessary dog-like changes
const dog = new Dog()
console.log("The dog is " + dog.getAge() + " years old")
dog.speak();
dog.speak();
dog.speak();
dog.speak();
dog.speak();
dog.speak();
dog.speak();
console.log("The dog is " + dog.getAge() + " years old")