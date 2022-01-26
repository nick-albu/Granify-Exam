const Cat = require ('./Constructors/Cat');
const Dog = require ('./Constructors/Dog')
const Data = require ('./Data/Data');

const petData = new Data({
    'Cats': [],
    'Dogs': []
});

//I've include the .commit() and .beginTrain() methods where I thought would be best, but I'm a little
//unclear in their intended use.

function saveTest() {
    petData.beginTran();

    // create a new cat object with a name
    const cat1 = new Cat('Garfield');

    // and inset it into the database
    petData.insert ('Cats', cat1);
    petData.commit();

    // I've left this here to prove that the petData is stored in our fake database
    console.log(petData);
    
    // create a new dog object with a name
    const dog1 = new Dog('Oddie');

    // and insert it into the database
    petData.insert ('Dogs', dog1);
    petData.commit();

    // this is a custom function that prints to the console how many pets (cats and dogs) were added
    logStats(1, 1);

    // I've left this here to prove that the petData is stored in our fake database
    console.log(petData);
}

saveTest();

function savePetShop() {
    petData.beginTran();
    //create 3 new cats and 3 new dogs without names
    const cat1 = new Cat();
    const cat2 = new Cat();
    const cat3 = new Cat();

    const dog1 = new Dog();
    const dog2 = new Dog();
    const dog3 = new Dog();

    // and insert all 6 pets into the database
    petData.insert ('Cats', cat1);
    petData.insert ('Cats', cat2);
    petData.insert ('Cats', cat3);

    petData.insert ('Dogs', dog1);
    petData.insert ('Dogs', dog2);
    petData.insert ('Dogs', dog3);
    petData.commit();

    console.log(petData);
    logStats(3, 3);
}

savePetShop();

function logStats(c, d) {
    const n = c + d;
    console.log('Added ' + n + ' new pets to the database');
    console.log(c + ' cat(s) and ' + d + 'dog(s)')
}

// The instructs ask for all 3 functions to be called. logStats() is called inside of both 
// savePetShop() and saveTest()
