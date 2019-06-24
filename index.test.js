const createDog = require('./index');
//test suite
describe('create dog function', () => {
//individual test
  it('returns a dog object', () => {
    const newDog = createDog('spot', 5, '20lbs');
    expect(newDog).toEqual({
      name: 'spot', 
      age: 5,
      weight: '20lbs'
    });
  });
});
