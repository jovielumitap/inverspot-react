/* eslint-disable object-curly-newline */

import React from 'react';
import PropTypes from 'prop-types';

import WharehouseForm from '../../Wharehouse/components/WharehouseForm';
import FullDialog from '../../FullDialog';


const DeliverDialog = ({
  loads,
  table,
  isOpen,
  onClose,
  isLoading,
  onSave,
  deliverEnableAction,
  dispatchSelectEmpty,
  dispatchChangeComment,
  dispatchChangeFieldValue,
  dispatchSelectToRefunded,
  dispatchSelectToDelivered,
}) => (
  <FullDialog
    title="Entrega a Cliente"
    isOpen={isOpen}
    isLoading={isLoading}
    onClose={onClose}
    onSave={onSave}
    enableAction={Boolean(deliverEnableAction)}
  >
    <WharehouseForm
      loads={loads}
      table={table}
      activity="deliver"
      dispatchSelectEmpty={dispatchSelectEmpty}
      dispatchChangeComment={dispatchChangeComment}
      dispatchChangeFieldValue={dispatchChangeFieldValue}
      dispatchSelectToRefunded={dispatchSelectToRefunded}
      dispatchSelectToDelivered={dispatchSelectToDelivered}
    />
  </FullDialog>
);

DeliverDialog.propTypes = {
  table: PropTypes.object.isRequired,
  loads: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  deliverEnableAction: PropTypes.bool.isRequired,
  dispatchSelectEmpty: PropTypes.func.isRequired,
  dispatchChangeComment: PropTypes.func.isRequired,
  dispatchChangeFieldValue: PropTypes.func.isRequired,
  dispatchSelectToRefunded: PropTypes.func.isRequired,
  dispatchSelectToDelivered: PropTypes.func.isRequired,
};

export default DeliverDialog;
