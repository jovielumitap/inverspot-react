import React from 'react';
import PropTypes from 'prop-types';

import {
  Avatar,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

const LayoutUserInfo = ({ authUser }) => (
  <List>
    <ListItem button component="a" href="/account/profile">
      <Avatar className="General__UserAvatarStyle">{authUser.user.last_name.charAt(0)}</Avatar>
      <ListItemText
        primary={`${authUser.user.first_name} ${authUser.user.last_name} `}
        secondary={`${authUser.user.currencies[0].currency_symbol} - ${authUser.user.currencies[0].currency_code}`}
      />
    </ListItem>
  </List>
);

LayoutUserInfo.propTypes = {
  authUser: PropTypes.object.isRequired,
};

export default LayoutUserInfo;
