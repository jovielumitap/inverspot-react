/* eslint-disable object-curly-newline */

import React from 'react';
import PropTypes from 'prop-types';

import WharehouseForm from '../../Wharehouse/components/WharehouseForm';
import FullDialog from '../../FullDialog';

const RefundDialog = ({
  loads,
  table,
  isOpen,
  onClose,
  isLoading,
  onSave,
  enableAction,
  dispatchSelectEmpty,
  dispatchChangeComment,
  dispatchChangeFieldValue,
  dispatchSelectToRefunded,
  dispatchSelectToDelivered,
}) => (
  <FullDialog
    color="secondary"
    title="Devolución a Cliente"
    isOpen={isOpen}
    isLoading={isLoading}
    onClose={onClose}
    onSave={onSave}
    enableAction={enableAction}
  >
    <WharehouseForm
      loads={loads}
      table={table}
      activity="refund"
      dispatchSelectEmpty={dispatchSelectEmpty}
      dispatchChangeComment={dispatchChangeComment}
      dispatchChangeFieldValue={dispatchChangeFieldValue}
      dispatchSelectToRefunded={dispatchSelectToRefunded}
      dispatchSelectToDelivered={dispatchSelectToDelivered}
    />
  </FullDialog>
);

RefundDialog.propTypes = {
  table: PropTypes.object.isRequired,
  loads: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  enableAction: PropTypes.bool.isRequired,
  dispatchSelectEmpty: PropTypes.func.isRequired,
  dispatchChangeComment: PropTypes.func.isRequired,
  dispatchChangeFieldValue: PropTypes.func.isRequired,
  dispatchSelectToRefunded: PropTypes.func.isRequired,
  dispatchSelectToDelivered: PropTypes.func.isRequired,
};

export default RefundDialog;
