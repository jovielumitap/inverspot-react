import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import RefundDialog from './components/RefundDialog';

const Refund = ({
  table,
  loads,
  isOpen,
  onOpen,
  onClose,
  isLoading,
  onSave,
  disabled,
  refundEnableAction,
  dispatchSelectEmpty,
  dispatchChangeComment,
  dispatchChangeFieldValue,
  dispatchSelectToRefunded,
  dispatchSelectToDelivered,
}) => (
  <div className="refund_container">
    <Button
      onClick={onOpen}
      className="w-100"
      color="secondary"
      variant="contained"
      disabled={disabled}
    >
      <span className="pr-1">
        <FontAwesomeIcon icon="cart-arrow-down" />
      </span>
      <span className="pl-1">
        Devolver Productos
      </span>
    </Button>
    <RefundDialog
      table={table}
      loads={loads}
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoading}
      onSave={onSave}
      enableAction={refundEnableAction}
      dispatchSelectEmpty={dispatchSelectEmpty}
      dispatchChangeComment={dispatchChangeComment}
      dispatchChangeFieldValue={dispatchChangeFieldValue}
      dispatchSelectToRefunded={dispatchSelectToRefunded}
      dispatchSelectToDelivered={dispatchSelectToDelivered}
    />
  </div>
);

Refund.propTypes = {
  table: PropTypes.object.isRequired,
  loads: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  refundEnableAction: PropTypes.bool.isRequired,
  dispatchSelectEmpty: PropTypes.func.isRequired,
  dispatchChangeComment: PropTypes.func.isRequired,
  dispatchChangeFieldValue: PropTypes.func.isRequired,
  dispatchSelectToRefunded: PropTypes.func.isRequired,
  dispatchSelectToDelivered: PropTypes.func.isRequired,
};

export default Refund;
