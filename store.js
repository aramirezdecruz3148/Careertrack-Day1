const state = {
  shirts: 5,
  pants: 10,
  toys: 100,
  shoes: 1,
  apples: 9
};

function getState() {
  return state;
}

function updateState(key, value) {
  state[key] = value;
  return state;
}

module.exports = {
  getState, 
  updateState
};
