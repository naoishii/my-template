import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../modules/counter';
import Component from '../components/Counter';

const mapStateToProps = ({ counter }) => counter;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
