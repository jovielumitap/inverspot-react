/* eslint-disable camelcase */
import { connect } from 'react-redux';
/* Component */
import RegisterStep from './RegisterStep';
/* Actions */
import { fetchProfileDetail } from '../../../redux/actions';

const mapStateToProps = state => ({
  auth: state.auth,
  loads: state.loads,
  profileReducer: state.profileReducer,
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchProfileDetail: () => dispatch(fetchProfileDetail()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterStep);
