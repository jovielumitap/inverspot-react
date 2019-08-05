import React, { Component } from 'react';
import {
  Card,
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  ListItemIcon,
  Switch,
  Collapse,
  Divider,
} from '@material-ui/core';
import {
  Storage,
  DeveloperBoard,
  ExpandLess,
  ExpandMore,
  Description,
  Check,
  LocalShipping,
} from '@material-ui/icons';

import { isMobile } from 'react-device-detect';


import './Profile.scss';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  changeAlmAuthUser,
  changeSellOrderStatusAuthUser,
} from '../../../redux/actions/authUserActions';

import LayoutUserInfo from '../../../components/Layout/components/LayoutUserInfo';

import authUserProps from '../../../propTypes/authUserProps';

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ordenC: false,
      ventaC: false,
      entregarC: false,
    };
  }
  static propTypes = {
    authUser: authUserProps.isRequired,
    dispatch: PropTypes.func.isRequired,
  };


  handleClick = (collapse) => {
    this.setState(state => ({ [collapse]: !state[collapse] }));
  };

  render() {
    const { authUser, dispatch } = this.props;
    const { ordenC, ventaC, entregarC } = this.state;
    return (
      <div className="settings d-flex flex-wrap justify-content-center">
        <Card className={isMobile ? 'settings__cardMobile px-4 py-2' : 'settings__card px-4 py-2'}>
          <div className="settings__title">Perfil</div>
          <div className="settings__body">
            <LayoutUserInfo authUser={authUser} />
            <Divider />
            <List>
              <ListItem>
                <Avatar style={{ backgroundColor: '#f50057' }}>
                  <Storage />
                </Avatar>
                <ListItemText
                  primary={authUser.domain}
                  secondary="Dominio actual"
                />
              </ListItem>
              <ListItem>
                <Avatar>
                  <DeveloperBoard />
                </Avatar>
                <ListItemText
                  primary={`${authUser.user.account_default.firstname} ${
                    authUser.user.account_default.lastname
                    }`}
                  secondary="Cliente por defecto"
                />
              </ListItem>
            </List>
          </div>
        </Card>
        <Card className={isMobile ? 'settings__cardMobile px-4 py-2' : 'settings__card px-4 py-2'}>
          <div className="settings__title">Configuración</div>
          <div className="settings__body__configuration">
            <List>
              <ListItem
                button
                onClick={() => {
                  this.handleClick('ordenC');
                }}
              >
                <ListItemIcon>
                  <Description />
                </ListItemIcon>
                <ListItemText primary="Estado de la Orden" />
                {ordenC ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={ordenC} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {authUser.user.sostatus.map(status => (
                    <ListItem
                      className="pl-4"
                      // @ts-ignore
                      key={`${constructor.name}-${status.id}`}
                    >
                      <ListItemText primary={status.value} />
                      <ListItemSecondaryAction>
                        <Switch
                          onClick={
                            status.id === authUser.user.config.sostatus
                              ? () => { }
                              : () => { dispatch(changeSellOrderStatusAuthUser(status.id)); }
                          }
                          checked={
                            status.id === authUser.user.config.sostatus
                          }
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
              <Divider />
              <ListItem
                button
                onClick={() => {
                  this.handleClick('ventaC');
                }}
              >
                <ListItemIcon>
                  <Check />
                </ListItemIcon>
                <ListItemText primary="Permite Venta sin existencia" />
                {ventaC ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={ventaC} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {authUser.user.config.pos_sininv
                    ? (
                      <ListItem className="pl-4">
                        <ListItemText primary="Si" />
                        <ListItemSecondaryAction>
                          <Switch
                            disabled
                            checked={authUser.user.config.pos_sininv}
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                    )
                    : (
                      <ListItem className="pl-4">
                        <ListItemText primary="No" />
                        <ListItemSecondaryAction>
                          <Switch
                            disabled
                            checked={authUser.user.config.pos_sininv === false}
                          />
                        </ListItemSecondaryAction>
                      </ListItem>
                    )
                  }
                </List>
              </Collapse>
              <Divider />
              <ListItem
                button
                onClick={() => {
                  this.handleClick('entregarC');
                }}
              >
                <ListItemIcon>
                  <LocalShipping />
                </ListItemIcon>
                <ListItemText primary="Entregar" />
                {entregarC ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={entregarC} timeout="auto" unmountOnExit>
                <List disablePadding>
                  {authUser.user.pos_auto_alm.map(alm => (
                    <ListItem
                      className="pl-4"
                      key={`${constructor.name}-${alm.id}`}
                    >
                      <ListItemText primary={alm.value} />
                      <ListItemSecondaryAction>
                        <Switch
                          onClick={
                            authUser.user.config.pos_auto_alm === alm.id
                              ? () => { }
                              : () => { dispatch(changeAlmAuthUser(alm.id)); }
                          }
                          checked={
                            authUser.user.config.pos_auto_alm === alm.id
                          }
                        />
                      </ListItemSecondaryAction>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </List>
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authUser: state.authUser,
  loads: state.loads,
});

export default connect(mapStateToProps)(Profile);
