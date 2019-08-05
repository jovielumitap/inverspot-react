import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import CheckOutDialog from './components/CheckOutDialog';

const CheckOut = ({
  color,
  title,
  isOpen,
  onOpen,
  onClose,
  isLoading,
  onSave,
  canSell,
  totalToPay,
  type,
  defaultOrderStatus,
  orderStatuses,
  paymentTypes,
}) => (
  <>
    <Button
      className="w-100 "
      color={type !== 'refund' ? 'primary' : 'secondary'}
      variant="contained"
      onClick={
      canSell
        ? onOpen
        : () => {}
      }
      disabled={!canSell}
    >
      <span className="pr-1">
        <FontAwesomeIcon icon="hand-holding-usd" />
      </span>
      <span className="pl-1">
        { title }
      </span>
    </Button>

    <CheckOutDialog
      color={color}
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoading}
      onSave={onSave}
      totalToPay={totalToPay}
      defaultOrderStatus={defaultOrderStatus}
      orderStatuses={orderStatuses}
      paymentTypes={paymentTypes}
    />
  </>
);

CheckOut.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  canSell: PropTypes.bool.isRequired,
  totalToPay: PropTypes.number.isRequired,
  type: PropTypes.string,
  defaultOrderStatus: PropTypes.string,
  orderStatuses: PropTypes.array,
  paymentTypes: PropTypes.object.isRequired,
};

CheckOut.defaultProps = {
  title: 'Cobrar',
  color: 'primary',
  type: 'checkout',
  defaultOrderStatus: '',
  orderStatuses: [],
};

export default CheckOut;
