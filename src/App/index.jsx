import React, {Component} from 'react';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {ToastContainer} from 'react-toastify';
import {library} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
import '../scss/app.scss';
import ScrollToTop from '../components/ScrollToTop';
import LoadComponent from '../components/Load/LoadComponent';
import MainApp from "../views/index";
import {connect} from "react-redux";
import { Redirect, Route, Switch } from 'react-router-dom';
import LogIn from "./LogIn";
import LogOut from "./LogOut";
import Register from "./Register";
import RegisterStep from "./Register/RegisterStep";
import NotFound404 from "../views/Errors/NotFound404";
import { setInitUrl } from "../redux/actions/authUserActions";
library.add(
    fab,
    fas
);


const RestrictedRoute = ({ component: Component, authUser, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                authUser.username
                    ? <Component {...props} />
                    : <Redirect
                        to={{
                            pathname: '/sign-in',
                            state: { from: props.location }
                        }}
                    />}
        />
    )
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
                },
            },
            active: {},
            completed: {},
        },
    }
});

class App extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
        };
    }
    componentWillMount() {
        window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
        if (this.props.initURL === '') {
            this.props.setInitUrl(this.props.history.location.pathname);
        }
    }
    componentDidMount() {
        window.addEventListener('load', () => {
            this.setState({loaded: true});
        });
    }

    render() {
        const {loaded} = this.state;
        const { match, location, authUser, initURL } = this.props;
        if (location.pathname === '/') {
            if (!authUser.username) {
                return ( <Redirect to={'/sign-in'}/> );
            } else if (initURL === '' || initURL === '/' || initURL === '/sign-in') {
                return ( <Redirect to={'/app/opportunity-investment'}/> );
            } else {
                return (<Redirect to={initURL} />);
            }
        }
        return (
            <ThemeProvider theme={inverspotTheme}>
                <ScrollToTop>
                    <>
                        {!loaded && <LoadComponent/>}
                        <Switch>
                            <RestrictedRoute path={`${match.url}app`}
                                             authUser={authUser}
                                             component={MainApp}
                            />
                            <Route path='/sign-in' component={LogIn} />
                            <Route path='/sign-out' component={LogOut} />
                            <Route path='/sign-up' component={Register} />
                            <Route path='/sign-up-step' component={RegisterStep} />
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
const mapStateToProps = ({ auth }) => {
    const { authUser, initURL } = auth;
    return { authUser, initURL }
};
export default connect(mapStateToProps, { setInitUrl })(App);
