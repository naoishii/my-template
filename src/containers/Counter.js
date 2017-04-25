import { connect } from 'react-redux';

import * as actions from '../modules/counter';
import Component from '../components/Counter';

const mapStateToProps = ({ counter }) => counter;

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(actions.increment());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
