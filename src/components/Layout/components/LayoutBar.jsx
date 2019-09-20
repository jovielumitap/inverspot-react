/* eslint-disable object-curly-newline */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';

const renderContent = (classes) => {
  const logo = `${process.env.PUBLIC_URL}/img/logo-inverspot.png`;
  return (
    <div className="position-relative w-100" style={{ marginRight: "50px"}}>
      <div className="align-center position-absolute top-action-bar-logo">
        <img src={logo} alt={""}/>
      </div>
    </div>
  )

}
const renderLeftIcon = (classes, dashboardMenuIsDisplayed, closeDashboardMenu, openDashboardMenu) => {
  return (
    <IconButton
      color="inherit"
      aria-label="Open drawer"
      onClick={
        dashboardMenuIsDisplayed
          ? closeDashboardMenu
          : openDashboardMenu
      }
      className={classes.menuButton}
    >
      <MenuIcon />
    </IconButton>
  )

}
const LayoutBar = ({ classes, dashboardMenuIsDisplayed, openDashboardMenu, closeDashboardMenu, history }) => (
  <AppBar
    className={`${classNames(classes.appBar)} box_shadow_none positionRelative`}
  >
    <Toolbar>
      <div className={`${classes.grow} d-flex`}>
        {renderLeftIcon(classes, dashboardMenuIsDisplayed, closeDashboardMenu, openDashboardMenu, history)}
        {renderContent(classes)}
      </div>
    </Toolbar>
  </AppBar>
);

LayoutBar.propTypes = {
  classes: PropTypes.object.isRequired,
  dashboardMenuIsDisplayed: PropTypes.bool.isRequired,
  openDashboardMenu: PropTypes.func.isRequired,
  closeDashboardMenu: PropTypes.func.isRequired,
};
export default connect()(LayoutBar);
