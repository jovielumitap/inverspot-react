import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';

import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { isMobile } from 'react-device-detect';

import { NavLink } from 'react-router-dom';

import styles from './styles';

class Layout2 extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: null,
      anchorStore: null,
    };
    this.logo = `${process.env.PUBLIC_URL}/img/logo.svg`;
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleClick = (event) => {
    this.setState({ anchorStore: event.currentTarget });
  };

  handleCloseStore = () => {
    this.setState({ anchorStore: null });
  };

  render() {
    const { classes, theme } = this.props;
    const { open, anchorEl, anchorStore } = this.state;
    const openAnchor = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open} id="frigo">
            <div className={classes.grow}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={
                  open
                    ? this.handleDrawerClose
                    : this.handleDrawerOpen
                }
                className={classes.menuButton}
              >
                {
                  open
                    ? <CloseIcon />
                    : <MenuIcon />
                }
              </IconButton>
              <img className={classes.logo} src={this.logo} alt="comercia.io" />
            </div>
            <div>
              <Button
                aria-owns={anchorStore ? 'simple-menu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                Almacen
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorStore}
                open={Boolean(anchorStore)}
                onClose={this.handleCloseStore}
              >
                <MenuItem onClick={this.handleCloseStore}>General</MenuItem>
                <MenuItem onClick={this.handleCloseStore}>Prueba</MenuItem>
              </Menu>
              <IconButton
                aria-owns={openAnchor ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="inherit"
                className={classes.menuButton}
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                open={openAnchor}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>
                  <NavLink
                    to="/user/profile"
                  >
                    Perfil
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={this.handleClose}>
                  <NavLink
                    to="/account/logout"
                  >
                    Cerrar session
                  </NavLink>
                </MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <NavLink
              to="/"
              onClick={this.handleDrawerClose}
            >
              <ListItem button>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItem>
            </NavLink>
            <NavLink
              to="/pos/sell/new"
              onClick={this.handleDrawerClose}
            >
              <ListItem button>
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="POS" />
              </ListItem>
            </NavLink>
            <NavLink
              to="/user/profile"
              onClick={this.handleDrawerClose}
            >
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Clientes" />
              </ListItem>
            </NavLink>
          </List>
        </Drawer>
      </div>
    );
  }
}

Layout2.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Layout2);
