/* eslint-disable camelcase */
import { connect } from 'react-redux';
/* Component */
import RegisterStep from './RegisterStep';
/* Actions */
import {
  postProfileDetail,
  fetchProfileDetail,
  fetchProfileScheme,
} from '../../../redux/actions';

const mapStateToProps = state => ({
  auth: state.auth,
  loads: state.loads,
  profileReducer: state.profileReducer,
});

const mapDispatchToProps = dispatch => ({
  dispatchFetchProfileDetail: () => dispatch(fetchProfileDetail()),
  dispatchFetchProfileScheme: () => dispatch(fetchProfileScheme()),
  dispatchPostProfileDetail: (params, redirect, history, redirectTo) => dispatch(postProfileDetail(params, redirect, history, redirectTo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterStep);
