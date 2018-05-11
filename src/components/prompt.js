import { h } from 'ink';
import TextInput from 'ink-text-input';
import PropTypes from 'prop-types';
import { connect } from 'ink-redux';

const UserPrompt = ({ query, onChange, onSubmit }) => (
  <div>
    Username:
    <TextInput value={query} onChange={onChange} onSubmit={onSubmit} />
  </div>
);

UserPrompt.propTypes = {
  query: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func
};

const mapStateToProps = ({ query }) => ({
  query
});

const mapDispatchToProps = {
  handleQueryChange: value => ({ type: 'SET_USER', value })
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPrompt);
