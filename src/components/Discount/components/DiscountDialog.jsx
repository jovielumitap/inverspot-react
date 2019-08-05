import React from 'react';
import PropTypes from 'prop-types';

import FullDialog from '../../FullDialog';
import DiscountForm from './DiscountForm';

/* DiscountForm required totalToPay prop */

class DiscountDialog extends DiscountForm {
  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onSave: PropTypes.func.isRequired,
  };

  static defaultProps = {
    title: 'Descuento',
    color: 'secondary',
  };

  onSave = () => {
    const { onSave } = this.props;
    const { totalDiscount } = this.state;
    const amount = Number.parseFloat(this.amount.value) || 0;
    const percentage = Number.parseFloat(this.percentage.value) || 0;
    const result = {
      fixed: amount,
      percentage,
      total: totalDiscount,
    };
    onSave(result);
  }

  render() {
    const {
      color,
      title,
      isOpen,
      onClose,
      isLoading,
    } = this.props;

    return (
      <FullDialog
        color={color}
        title={title}
        isOpen={isOpen}
        isLoading={isLoading}
        onClose={onClose}
        onSave={this.onSave}
        enableAction
      >
        { super.render() }
      </FullDialog>
    );
  }
}

export default DiscountDialog;
