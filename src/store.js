const { createStore } = require('redux');

// Main Reducer
const reducer = (state = { user: '', pass: '' }, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        ...{
          user: action.value
        }
      };
    case 'SET_PASS':
      return {
        ...state,
        ...{
          pass: action.value
        }
      };
    default:
      return state;
  }
};

/**
 * Creates and returns the store
 */
const getStore = () => createStore(reducer);

module.exports = getStore;
