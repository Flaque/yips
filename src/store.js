const { createStore } = require('redux');

// Main Reducer
const reducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

/**
 * Creates and returns the store
 */
const getStore = () => createStore(reducer);

module.exports = getStore;
