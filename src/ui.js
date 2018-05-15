'use strict';

import { h, Component, Text } from 'ink';
import { Provider } from 'ink-redux';
import getStore from './store';

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

export default UI;
