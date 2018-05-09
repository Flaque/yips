'use strict';

const { h, Component, Text } = require('ink');
const { Provider } = require('ink-redux');
const getStore = require('./store');

const store = getStore();

class UI extends Component {
  render() {
    return (
      <Provider store={store}>
        <Text>Hello</Text>
      </Provider>
    );
  }
}

module.exports = UI;
