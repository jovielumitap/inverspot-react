import React from 'react';
import PropTypes from 'prop-types';

import {
  Avatar,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

const LayoutUserInfo = ({ user }) => (
  <List>
    <ListItem button component="a" href="/account/profile">
      <Avatar className="General__UserAvatarStyle">{user.user.last_name.charAt(0)}</Avatar>
      <ListItemText
        primary={`${user.user.first_name} ${user.user.last_name} `}
        secondary={`${user.user.currencies[0].currency_symbol} - ${user.user.currencies[0].currency_code}`}
      />
    </ListItem>
  </List>
);

LayoutUserInfo.propTypes = {
  user: PropTypes.object.isRequired,
};

export default LayoutUserInfo;
