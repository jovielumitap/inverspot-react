/* eslint-disable object-curly-newline */

import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import {withStyles} from '@material-ui/core/styles';

import {connect} from 'react-redux';
import {showElement, hideElement} from '../../redux/actions/displayActions';

import LayoutBar from './components/LayoutBar';
import LayoutMenu from './components/LayoutMenu';
import styles from './styles';
import classNames from "classnames";
import {toggleCommoModal} from "../../redux/actions";

const Layout = ({displays, classes, theme, dispatchOpenDashboard, dispatchCloseDashboard, dispatchToggleCommoModal, history}) => (
    <div className={`${classNames(classes.root)} sticky-top`}>
        <CssBaseline/>
        <LayoutBar
            classes={classes}
            dashboardMenuIsDisplayed={Boolean(displays.dashboardMenuIsDisplayed)}
            openDashboardMenu={dispatchOpenDashboard}
            closeDashboardMenu={dispatchCloseDashboard}
        />
        <LayoutMenu
            classes={classes}
            theme={theme}
            dashboardMenuIsDisplayed={Boolean(displays.dashboardMenuIsDisplayed)}
            closeDashboardMenu={dispatchCloseDashboard}
            toggleCommoModal={dispatchToggleCommoModal}
        />
    </div>
);

Layout.propTypes = {
    displays: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    dispatchOpenDashboard: PropTypes.func.isRequired,
    dispatchCloseDashboard: PropTypes.func.isRequired,
    dispatchToggleCommoModal: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    displays: state.displays,
});

const mapDispatchToProps = dispatch => ({
    dispatchOpenDashboard: () => dispatch(showElement('dashboardMenu')),
    dispatchCloseDashboard: () => dispatch(hideElement('dashboardMenu')),
    dispatchToggleCommoModal: () => dispatch(toggleCommoModal())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(Layout)));
