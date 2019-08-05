import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';

import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

const MainWrapper = ({ classes, children }) => (
  <main className={classes.root}>
    <div className={!isMobile ? (classes.align) : ''} />
    <div
      id="main-container-desktop"
      className={!isMobile ? (classes.content) : 'w-100'}
    >
      <div className={!isMobile ? (classes.drawerHeader) : ''} />
      { children }
    </div>
  </main>
);

MainWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default withRouter(withStyles(styles)(MainWrapper));
