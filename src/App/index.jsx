/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { ToastContainer } from 'react-toastify';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '../scss/app.scss';
import ScrollToTop from '../components/ScrollToTop';
import LoadComponent from '../components/Load/LoadComponent';
import MainApp from '../views/index';
import LogIn from './LogIn';
import LogOut from './LogOut';
import Register from './Register';
import RegisterStep from './Register/RegisterStep';
import NotFound404 from '../views/Errors/NotFound404';
import { setInitUrl } from '../redux/actions/authUserActions';

library.add(fab, fas);

const RestrictedRoute = ({
  component: Component,
  authUser,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (authUser.token ? (
      authUser.profile_status !== 'must_fill_profile'
        ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/sign-up-step',
              state: { from: props.location },
            }}
          />
        )
    ) : (
      <Redirect
        to={{
          pathname: '/sign-in',
          state: { from: props.location },
        }}
      />
    ))
    }
  />
);

RestrictedRoute.propTypes = {
  authUser: PropTypes.object.isRequired,
  component: PropTypes.object.isRequired,
};

const inverspotTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#23a1db',
    },
  },
  typography: {
    useNextVariants: true,
  },
  overrides: {
    MuiStepIcon: {
      root: {
        '&$completed': {
          color: 'pink',
        },
        '&$active': {
          color: 'red',
        }
      },
      active: {},
      completed: {},
    },
  },
});

class App extends Component {

  static propTypes = {
    user: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    initURL: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    setInitUrl: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    const { initURL, history } = this.props;
    if (initURL === '') {
      const { location: { pathname } } = history;
      this.props.setInitUrl(pathname);
    }
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      this.setState({ loaded: true });
    });
  }

  render() {
    const { loaded } = this.state;
    const { match, location, user, initURL, loading } = this.props;
    const { pathname } = location;
    if (pathname === '/') {
      if (!user.token) {
        return <Redirect to="/sign-in" />;
      }
      if (
        initURL === ''
        || initURL === '/'
        || initURL === '/sign-in'
        || initURL === '/sign-up'
      ) {
        return <Redirect to="/app/opportunity-investment" />;
      }
      return <Redirect to={initURL} />;
    }
    return (
      <ThemeProvider theme={inverspotTheme}>
        <ScrollToTop>
          <>
            {(loading || !loaded) && <LoadComponent />}
            <Switch>
              <RestrictedRoute
                path={`${match.url}app`}
                authUser={user}
                component={MainApp}
              />
              <Route path="/sign-in" component={LogIn} />
              <Route path="/sign-out" component={LogOut} />
              <Route path="/sign-up" component={Register} />
              <Route path="/sign-up-step" component={RegisterStep} />
              <Route component={NotFound404} />
            </Switch>
            <ToastContainer
              position="top-right"
              // autoClose={2500}
              hideProgressBar={false}
              newestOnTop={false}
              rtl={false}
              closeOnClick
              pauseOnVisibilityChange
              draggable
              pauseOnHover
            />
          </>
        </ScrollToTop>
      </ThemeProvider>
    );
  }
}
const mapStateToProps = ({ auth, loads }) => {
  const { user, initURL } = auth;
  const { loading } = loads;
  return { user, initURL, loading };
};
export default connect(
  mapStateToProps,
  { setInitUrl },
)(App);
