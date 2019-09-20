/* eslint-disable object-curly-newline */

import React from 'react';
import PropTypes from 'prop-types';

import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import {NavLink} from 'react-router-dom';

const LayoutMenu = ({
                        classes,
                        dashboardMenuIsDisplayed,
                        closeDashboardMenu,
                        toggleCommoModal
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
                <div className="menu-header-title py-2">
                    <img src={`${process.env.PUBLIC_URL}/img/logo-inverspot.png`} alt={""}/>
                </div>
            </div>
        </div>
        <List>
            <NavLink
                to="/app/opportunity-investment"
                onClick={() => {
                    closeDashboardMenu();
                }}
            >
                <ListItem button>
                    <div className={classes.menuItem}>Oportunidades</div>
                </ListItem>
                <Divider className={classes.divider}/>
            </NavLink>
            <NavLink
                to="/app/apartadas"
                onClick={() => {
                    closeDashboardMenu();
                }}
            >
                <ListItem button>
                    <div className={classes.menuItem}>Mis Apartadas</div>
                </ListItem>
                <Divider className={classes.divider}/>
            </NavLink>

            <NavLink
                to="/app/investment"
                onClick={() => {
                    closeDashboardMenu();
                }}
            >
                <ListItem button>
                    <div className={classes.menuItem}>Mis Inversiones</div>
                </ListItem>
                <Divider className={classes.divider}/>
            </NavLink>

            <NavLink
                to="/app/referrals"
                onClick={() => {
                    closeDashboardMenu();
                }}
            >
                <ListItem button>
                    <div className={classes.menuItem}>Mis Referidos</div>
                </ListItem>
                <Divider className={classes.divider}/>
            </NavLink>

            <NavLink
                to="/app/downloads"
                onClick={() => {
                    closeDashboardMenu();
                }}
            >
                <ListItem button>
                    <div className={classes.menuItem}>Mis Descargas</div>
                </ListItem>
                <Divider className={classes.divider}/>
            </NavLink>

            <NavLink
                to="/app/profile"
                onClick={() => {
                    closeDashboardMenu();
                }}
            >
                <ListItem button>
                    <div className={classes.menuItem}>Mi perfil</div>
                </ListItem>
                <Divider className={classes.divider}/>
            </NavLink>

            <NavLink
                to="#"
                onClick={() => {
                    toggleCommoModal();
                    closeDashboardMenu();
                }}
            >
                <ListItem button>
                    <div className={classes.menuItem}>¿Cómo invertir?</div>
                </ListItem>
                <Divider className={classes.divider}/>
            </NavLink>

            <NavLink
                to="/sign-out"
                onClick={() => {
                    closeDashboardMenu();
                }}
            >
                <ListItem button>
                    <div className={classes.menuItem}>Cerrar sesión</div>
                </ListItem>
                <Divider className={classes.divider}/>
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
