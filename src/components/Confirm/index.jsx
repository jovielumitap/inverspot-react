import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const Confirm = ({
  isOpen,
  title,
  description,
  confirmLabel,
  cancelLabel,
  onClose,
  onConfirm,
}) => (
  <Dialog
    open={isOpen}
    onClose={onClose}
    aria-labelledby="dialog-confirm"
  >
    <DialogTitle id="dialog-confirm">
      { title }
    </DialogTitle>
    <DialogContent>
      { description }
    </DialogContent>
    <DialogActions>
      <Button
        color="secondary"
        onClick={
          () => {
            onConfirm(false);
            onClose();
          }
        }
      >
        { cancelLabel }
      </Button>
      <Button
        color="primary"
        onClick={
          () => {
            onConfirm(true);
            onClose();
          }
        }
      >
        { confirmLabel }
      </Button>
    </DialogActions>
  </Dialog>
);

Confirm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
};

Confirm.defaultProps = {
  title: '',
  description: '',
  confirmLabel: 'Confirmar',
  cancelLabel: 'Cancelar',
};

export default Confirm;
