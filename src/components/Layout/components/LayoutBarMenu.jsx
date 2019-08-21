/* eslint-disable object-curly-newline */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText,  Avatar } from '@material-ui/core';
import { Lock } from '@material-ui/icons';

import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { connect } from 'react-redux';


import authUserProps from '../../../propTypes/authUserProps';

import LayoutUserInfo from './LayoutUserInfo';

class LayoutBarMenu extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    auth: authUserProps.isRequired,
    loads: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = { anchorStoreMenu: null, anchorUserMenu: null, rightDrawer: false };
  }

  openStoreMenu = (event) => {
    const { currentTarget } = event;
    this.setState({ anchorStoreMenu: currentTarget });
  }

  closeStoreMenu = () => {
    this.setState({ anchorStoreMenu: null });
  }

  openUserMenu = (event) => {
    const { currentTarget } = event;
    this.setState({ anchorUserMenu: currentTarget });
  }

  closeUserMenu = () => {
    this.setState({ anchorUserMenu: null });
  }

  toggleDrwawer = () => {
    const { rightDrawer } = this.state;
    if (!rightDrawer) {
      const { dispatchFetchBalance } = this.props;
      dispatchFetchBalance();
    }
    this.setState(prevState => ({ rightDrawer: !prevState.rightDrawer }));
  }

  slideList = () => {
    const {
      auth,
    } = this.props;
    return (
      <div
        className="drawer_content"
        role="presentation"
        // onClick={() => { this.toggleDrwawer(); }}
        onKeyDown={() => { this.toggleDrwawer(); }}
      >
        <div className="w-100">
          <LayoutUserInfo user={auth.user} />
          <Divider />
        </div>
        <div className="w-100">
          <Divider />
          <List>
            <ListItem button component="a" href="/account/profile">
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary="Perfil" />
            </ListItem>
            <ListItem button component="a" href="/account/logout">
              <ListItemIcon><Lock /></ListItemIcon>
              <ListItemText primary="Cerrar Sesión" />
            </ListItem>
          </List>
        </div>
      </div>
    );
  };

  render() {
    const { classes, auth } = this.props;
    const { anchorStoreMenu, anchorUserMenu, rightDrawer } = this.state;
    const storeMenuIsDisplayed = Boolean(anchorStoreMenu);
    const userMenuIsDisplayed = Boolean(anchorUserMenu);
    const currentStore = auth.isAuth ? auth.authUser.config.store : {};
    const { user } = auth;
    const last = user.username? user.username.charAt(0): "L";

    return (
      <div>
        <Button
          style={{ display: 'none' }}
          aria-owns={storeMenuIsDisplayed ? 'simple-menu' : undefined}
          aria-haspopup="true"
          onClick={this.openStoreMenu}
        >
          { currentStore.name || '' }
        </Button>
        <IconButton
          style={{ display: 'none' }}
          aria-owns={userMenuIsDisplayed ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          onClick={this.openUserMenu}
          color="inherit"
          className={classes.menuButton}
        >
          <AccountCircleIcon />
        </IconButton>
        <IconButton
          onClick={() => { console.log("click") }}
          color="inherit"
          className="mx-2"
        >
          <Avatar className="General__UserAvatarStyle">{last}</Avatar>
        </IconButton>
        <Drawer
          anchor="right"
          open={rightDrawer}
          onClose={() => { this.toggleDrwawer(); }}
        >
          { this.slideList() }
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loads: state.loads,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutBarMenu);
