import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import authUserProps from '../propTypes/authUserProps';

const PrivateRoute = ({ component: Component, authUser, ...rest }) => (
  <Route
    {...rest}
    render={
      props => (
        authUser.isAuth
          ? <Component {...props} />
          : <Redirect to="/account/login" />
      )
    }
  />
);

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
    PropTypes.string,
    PropTypes.elementType,
  ]).isRequired,
  authUser: authUserProps.isRequired,
};

const mapStateToProps = state => ({
  authUser: state.authUser,
});

export default connect(mapStateToProps)(PrivateRoute);
