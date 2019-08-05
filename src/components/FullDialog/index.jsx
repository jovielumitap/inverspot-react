/* eslint-disable object-curly-newline */

import React from 'react';
import PropTypes from 'prop-types';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from 'react-device-detect';
import classnames from 'classnames';

import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  CircularProgress,
  Fab,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';

import FullDialogTransition from './components/FullDialogTransition';
import LoadComponent from '../Load/LoadComponent';

const FullDialog = ({
  color,
  title,
  isOpen,
  isLoading,
  onClose,
  onSave,
  children,
  enableAction,
}) => {
  const childrenContainer = isMobile
    ? 'w-100 h-100 d-flex justify-content-center p-4'
    : 'w-100 h-100 d-flex justify-content-center';

  return (
    <Dialog
      fullScreen
      open={isOpen}
      TransitionComponent={FullDialogTransition}
      transitionDuration={{
        enter: 500,
        exit: 500,
      }}
    >
      <AppBar color={color} className="d-flex align-items-center">
        <Toolbar
          className={classnames('d-flex', 'w-100', {
            'justify-content-between': isBrowser,
          })}
        >
          <IconButton
            color="inherit"
            onClick={onClose}
            aria-label="Close"
            disabled={isLoading}
          >
            <CloseIcon />
          </IconButton>
          <Typography className="ml-2" variant="h6" color="inherit">
            {title}
          </Typography>
          <BrowserView>
            {isLoading ? (
              <CircularProgress
                className="ml-auto"
                color={color === 'primary' ? 'secondary' : 'primary'}
              />
            ) : (
              <IconButton
                className="ml-auto"
                color="inherit"
                onClick={onSave}
                disabled={!enableAction}
              >
                <SaveIcon />
              </IconButton>
            )}
          </BrowserView>
        </Toolbar>
      </AppBar>
      <div className="dialog_body d-flex flex-column justify-content-center dialog-bg">
        <div className="dialog_body_drawer" />
        <div className={childrenContainer}>
          {isLoading && <LoadComponent />}
          {isOpen && children}
        </div>
      </div>
      <MobileView>
        <Fab
          className="dialog_fab-fix"
          color={color}
          onClick={isLoading ? () => {} : onSave}
          disabled={!enableAction}
        >
          {isLoading ? (
            <CircularProgress
              color={color === 'primary' ? 'secondary' : 'primary'}
            />
          ) : (
            <SaveIcon />
          )}
        </Fab>
      </MobileView>
    </Dialog>
  );
};

FullDialog.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
  enableAction: PropTypes.bool,
};

FullDialog.defaultProps = {
  title: '',
  color: 'primary',
  enableAction: true,
};

export default FullDialog;
