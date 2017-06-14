import { connect } from 'react-redux';

import Navigator from '../navigators/AppNavigator';

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(
  mapStateToProps,
)(Navigator);
