'use strict';

const {
  h,
  Component,
  Text
} = require('ink');

const PropTypes = require('prop-types');

class UI extends Component {
  render({
    name
  }) {
    return h(Text, {
      green: true
    }, "I love ", name);
  }

}

UI.propTypes = {
  name: PropTypes.string
};
UI.defaultProps = {
  name: 'Ink'
};
module.exports = UI;