function createDog(name, age, weight) {
    return {
        name,
        age, 
        weight
    }
}

const newDog = createDog('fido', 2, '30lbs');

console.log(newDog);
