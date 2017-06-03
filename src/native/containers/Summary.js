import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../modules/summary';
import Component from '../components/Summary';

const mapStateToProps = ({ summary }) => summary;

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

