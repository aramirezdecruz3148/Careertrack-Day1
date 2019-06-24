const { getState, updateState } = require('./store');

describe('testing for object exercises', () => {
  it('testing if getState returns whole object', () => {
    const store = getState();
    expect(store).toEqual({
      shirts: 5,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9
    });
  });
  it('testing if updateState updates the object', () => {
    const updateStore = updateState('shirts', 6);
    expect(updateStore).toEqual({
      shirts: 6,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9
    });
  });
});
