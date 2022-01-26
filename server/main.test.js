const Cat = require ('./Constructors/Cat')


test('This test ensures that a cats age is a random number between 5 and 10', () => {
    const cat = new Cat;
    const n = cat.getAge();

    expect(n).toBeGreaterThanOrEqual(5);
    expect(n).toBeLessThan(11);
})

test('This test ensures that speak() console.logs a string if given one, otherwise it will console.log meow', () => {
    const cat = new Cat;
    const words = 'Theyre taking the Hobbits to Isengard'
    console.log = jest.fn();

    cat.speak(words);
    expect(console.log).toHaveBeenCalledWith(words);

    cat.speak();
    expect(console.log).toHaveBeenCalledWith('meow');
})

test('This test ensures that setName() is correctly apply the new name, and storing the old one' , () => {
    const cat = new Cat('Fluffy');
    cat.setName('Ted');
    const newName = cat.getName();
    const pastNames = cat.getNames();
    expect(newName).toBe('Ted');
    expect(pastNames).toStrictEqual(['Fluffy']);
    cat.setName('Megatron');
    const nextName = cat.getName();
    const nextPastNames = cat.getNames();
    expect(nextName).toBe('Megatron');
    expect(nextPastNames).toStrictEqual(['Fluffy', 'Ted'])
})