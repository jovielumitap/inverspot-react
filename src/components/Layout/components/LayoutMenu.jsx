/* eslint-disable object-curly-newline */

import React from 'react';
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { NavLink } from 'react-router-dom';

const LayoutMenu = ({
  classes,
  theme,
  dashboardMenuIsDisplayed,
  closeDashboardMenu,
}) => (
  <Drawer
    className={classes.drawer}
    anchor="left"
    open={dashboardMenuIsDisplayed}
    classes={{
      paper: classes.drawerPaper,
    }}
    onClose={closeDashboardMenu}
  >
    <div className={classes.drawerHeader}>
      <div className="w-100">
        <div className="menu-header-title py-2">Inversport</div>
      </div>
    </div>
    <List>
      <NavLink
        to="/app/opportunity-investment"
        onClick={() => {
          closeDashboardMenu();
        }}
      >
        <Divider className={classes.divider}/>
        <ListItem button>
          <div className={classes.menuItem}>Oportunidades</div>
        </ListItem>
      </NavLink>
      <NavLink
          to="/app/participation"
          onClick={() => {
            closeDashboardMenu();
          }}
      >
        <Divider className={classes.divider}/>
        <ListItem button>
          <div className={classes.menuItem}>Mis Apartadas</div>
        </ListItem>
      </NavLink>

      <NavLink
          to="/app/investment"
          onClick={() => {
            closeDashboardMenu();
          }}
      >
        <Divider className={classes.divider}/>
        <ListItem button>
          <div className={classes.menuItem}>Mis Inversiones</div>
        </ListItem>
      </NavLink>

      <NavLink
          to="/app/referrals"
          onClick={() => {
            closeDashboardMenu();
          }}
      >
        <Divider className={classes.divider}/>
        <ListItem button>
          <div className={classes.menuItem}>Mis Referidos</div>
        </ListItem>
      </NavLink>

      <NavLink
          to="/app/downloads"
          onClick={() => {
            closeDashboardMenu();
          }}
      >
        <Divider className={classes.divider}/>
        <ListItem button>
          <div className={classes.menuItem}>Mis Descargas</div>
        </ListItem>
      </NavLink>

      <NavLink
          to="/app/profile"
          onClick={() => {
            closeDashboardMenu();
          }}
      >
        <Divider className={classes.divider}/>
        <ListItem button>
          <div className={classes.menuItem}>Mi perfil</div>
        </ListItem>
      </NavLink>

      <NavLink
          to="/sign-out"
          onClick={() => {
            closeDashboardMenu();
          }}
      >
        <Divider className={classes.divider}/>
        <ListItem button>
          <div className={classes.menuItem}>Cerrar sesión</div>
        </ListItem>
      </NavLink>
    </List>
  </Drawer>
);

LayoutMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  dashboardMenuIsDisplayed: PropTypes.bool.isRequired,
  closeDashboardMenu: PropTypes.func.isRequired,
};

export default LayoutMenu;
