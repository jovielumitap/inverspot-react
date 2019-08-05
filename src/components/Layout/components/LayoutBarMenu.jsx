/* eslint-disable object-curly-newline */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Radio, Avatar, LinearProgress } from '@material-ui/core';
import { Lock } from '@material-ui/icons';

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import { NavLink } from 'react-router-dom';

import { connect } from 'react-redux';
import { selectStore } from '../../../redux/actions/authUserActions';
import { fetchBalance, saveCC, saveACC } from '../../../redux/actions/BalanceActions';
import { fetchAllProducts } from '../../../redux/actions/productActions';
import { fetchAllOrders } from '../../../redux/actions/orderActions';
import { closeModal } from '../../../redux/actions/modalActions';

/* Rutines */
import { getCC } from '../../../redux/actions/posActions';

import authUserProps from '../../../propTypes/authUserProps';

import LayoutUserInfo from './LayoutUserInfo';
import Balance from '../../Balance';

class LayoutBarMenu extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    auth: authUserProps.isRequired,
    balance: PropTypes.object.isRequired,
    loads: PropTypes.object.isRequired,
    modals: PropTypes.object.isRequired,

    dispatchSelectStore: PropTypes.func.isRequired,

    /* Fetch */
    dispatchFetchBalance: PropTypes.func.isRequired,
    dispatchGetCC: PropTypes.func.isRequired,
    dispatchGetACC: PropTypes.func.isRequired,

    /* CC */
    dispatchCloseDialogCC: PropTypes.func.isRequired,
    dispatchSaveCC: PropTypes.func.isRequired,

    /* ACC */
    dispatchCloseDialogACC: PropTypes.func.isRequired,
    dispatchSaveACC: PropTypes.func.isRequired,
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
      loads,
      modals,
      balance,
      auth,
      dispatchSelectStore,
      /* Fetch */
      dispatchFetchBalance,
      dispatchGetCC,
      dispatchGetACC,

      /* CC */
      dispatchCloseDialogCC,
      dispatchSaveCC,

      /* AC */
      dispatchCloseDialogACC,
      dispatchSaveACC,
    } = this.props;
    const stores = auth.isAuth ? auth.user.almacenes : [];
    const currentStore = auth.isAuth ? auth.user.config.store : {};
    return (
      <div
        className="drawer_content"
        role="presentation"
        // onClick={() => { this.toggleDrwawer(); }}
        onKeyDown={() => { this.toggleDrwawer(); }}
      >
        <div className="w-100">
          <LayoutUserInfo authUser={auth} />
          <Divider />
          <ListSubheader>Almacenes</ListSubheader>
          <List className="General__storeList" dense>
            { stores.map(store => (
              <ListItem
                style={{ padding: '0 0.5em' }}
                dense
                button
                key={`${this.constructor.name}-${store.crmid}`}
                onClick={(event) => {
                  event.preventDefault();
                  const { currentTarget } = event;
                  dispatchSelectStore(currentTarget);
                  this.closeStoreMenu();
                }}
                data-crmid={store.crmid}
                data-name={store.almacen}
              >
                <Radio checked={store.crmid === currentStore.crmid} />
                <ListItemText primary={store.almacen} />
              </ListItem>
            )) }
          </List>
        </div>
        { loads.balanceIsLoading && <LinearProgress /> }
        <Balance
          balance={balance}
          balanceIsLoading={Boolean(loads.balanceIsLoading)}
          dispatchFetchBalance={dispatchFetchBalance}

          /* Fetch */
          dispatchGetCC={dispatchGetCC}
          dispatchGetACC={dispatchGetACC}

          /* dialogCC */
          dialogCCIsOpen={Boolean(modals.dialogCCModalIsOpen)}
          dialogCCIsLoading={Boolean(loads.dialogCCIsLoading)}
          closeDialogCC={dispatchCloseDialogCC}
          dispatchSaveCC={dispatchSaveCC}

          /* dialogACC */
          dialogACCIsOpen={Boolean(modals.dialogACCModalIsOpen)}
          dialogACCIsLoading={Boolean(loads.dialogACCIsLoading)}
          closeDialogACC={dispatchCloseDialogACC}
          dispatchSaveACC={dispatchSaveACC}
        />
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
    const { classes, auth, dispatchSelectStore } = this.props;
    const { anchorStoreMenu, anchorUserMenu, rightDrawer } = this.state;
    const storeMenuIsDisplayed = Boolean(anchorStoreMenu);
    const userMenuIsDisplayed = Boolean(anchorUserMenu);
    const stores = auth.isAuth ? auth.user.almacenes : [];
    const currentStore = auth.isAuth ? auth.authUser.config.store : {};
    const { authUser } = auth;
    const last = authUser.username.charAt(0);

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
        <Menu
          id="simple-menu"
          anchorEl={anchorStoreMenu}
          open={storeMenuIsDisplayed}
          onClose={this.closeStoreMenu}
        >
          {
            stores.map(store => (
              <MenuItem
                key={`${this.constructor.name}-${store.crmid}`}
                onClick={(event) => {
                  event.preventDefault();
                  const { currentTarget } = event;
                  dispatchSelectStore(currentTarget);
                  this.closeStoreMenu();
                }}
                data-crmid={store.crmid}
                data-name={store.almacen}
              >
                {store.almacen}
              </MenuItem>
            ))
          }
        </Menu>
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
        <Menu
          id="menu-appbar"
          anchorEl={anchorUserMenu}
          open={userMenuIsDisplayed}
          onClose={this.closeUserMenu}
        >
          <MenuItem onClick={this.closeUserMenu}>
            <NavLink
              to="/account/profile"
            >
              Perfil
            </NavLink>
          </MenuItem>
          <MenuItem onClick={this.closeUserMenu}>
            <NavLink
              to="/account/logout"
            >
              Cerrar Sesión
            </NavLink>
          </MenuItem>
          <Divider />
          {
            stores.map(store => (
              <MenuItem
                button
                key={`${this.constructor.name}-${store.crmid}`}
                onClick={(event) => {
                  event.preventDefault();
                  const { currentTarget } = event;
                  dispatchSelectStore(currentTarget);
                  this.closeStoreMenu();
                }}
                data-crmid={store.crmid}
                data-name={store.almacen}
              >
                {store.almacen}
              </MenuItem>
            ))
          }
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loads: state.loads,
  modals: state.modals,
  balance: state.balance,
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  dispatchSelectStore: (element) => {
    const { crmid, name } = element.dataset;
    dispatch(selectStore(crmid, name));
    dispatch(fetchAllProducts());
    dispatch(fetchAllOrders());
  },
  dispatchFetchBalance: () => dispatch(fetchBalance()),

  /* CC */
  dispatchGetCC: (date = '') => dispatch(getCC('dialogCC', 'cc', date)),
  dispatchCloseDialogCC: () => dispatch(closeModal('dialogCC')),
  dispatchSaveCC: data => dispatch(saveCC(data)),

  /* ACC */
  dispatchGetACC: (date = '') => dispatch(getCC('dialogACC', 'ACC', date)),
  dispatchCloseDialogACC: () => dispatch(closeModal('dialogACC')),
  dispatchSaveACC: data => dispatch(saveACC(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LayoutBarMenu);
