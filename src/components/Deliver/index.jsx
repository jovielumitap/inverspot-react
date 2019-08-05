import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DeliverDialog from './components/DeliverDialog';

const Deliver = ({
  table,
  loads,
  isOpen,
  onOpen,
  onClose,
  isLoading,
  onSave,
  disabled,
  deliverEnableAction,
  dispatchSelectEmpty,
  dispatchChangeComment,
  dispatchChangeFieldValue,
  dispatchSelectToRefunded,
  dispatchSelectToDelivered,
}) => (
  <div className="deliver_container w-100">
    <Button
      onClick={onOpen}
      className="w-100"
      color="primary"
      variant="contained"
      disabled={disabled}
    >
      <span className="pr-1">
        <FontAwesomeIcon icon="cart-arrow-down" />
      </span>
      <span className="pl-1">
        Entregar
      </span>
    </Button>
    <DeliverDialog
      table={table}
      loads={loads}
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoading}
      onSave={onSave}
      deliverEnableAction={deliverEnableAction}
      dispatchSelectEmpty={dispatchSelectEmpty}
      dispatchChangeComment={dispatchChangeComment}
      dispatchChangeFieldValue={dispatchChangeFieldValue}
      dispatchSelectToRefunded={dispatchSelectToRefunded}
      dispatchSelectToDelivered={dispatchSelectToDelivered}
    />
  </div>
);

Deliver.propTypes = {
  table: PropTypes.object.isRequired,
  loads: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  deliverEnableAction: PropTypes.bool.isRequired,
  dispatchSelectEmpty: PropTypes.func.isRequired,
  dispatchChangeComment: PropTypes.func.isRequired,
  dispatchChangeFieldValue: PropTypes.func.isRequired,
  dispatchSelectToRefunded: PropTypes.func.isRequired,
  dispatchSelectToDelivered: PropTypes.func.isRequired,
};

export default Deliver;
