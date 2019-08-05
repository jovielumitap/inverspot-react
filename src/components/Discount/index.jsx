import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import DiscountDialog from './components/DiscountDialog';

const Discount = ({
  color,
  title,
  isOpen,
  onOpen,
  onClose,
  isLoading,
  onSave,
  totalToPay,
}) => (
  <>
    <Button
      variant="outlined"
      color="secondary"
      onClick={onOpen}
    >
      { title }
    </Button>
    <DiscountDialog
      color={color}
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      isLoading={isLoading}
      onSave={onSave}
      totalToPay={totalToPay}
    />
  </>
);

Discount.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
  totalToPay: PropTypes.number.isRequired,
};

Discount.defaultProps = {
  title: 'Descuento',
  color: 'secondary',
};

export default Discount;
