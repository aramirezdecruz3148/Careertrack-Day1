const { getState, updateState } = require('./store');

describe('store', () => {
  it('can get state', () => {
    const store = getState();
    expect(store).toEqual({
      shirts: 5,
      pants: 10,
      toys: 100,
      shoes: 1,
      apples: 9
    });
  });
  
  it('can update state', () => {
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
