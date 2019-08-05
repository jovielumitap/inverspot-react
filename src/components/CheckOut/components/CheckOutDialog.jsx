import React from 'react';
import PropTypes from 'prop-types';

import FullDialog from '../../FullDialog';
import CheckOutForm from './CheckOutForm';

/* CheckOutForm required totalToPay prop and paymentTypes */

class CheckOutDialog extends CheckOutForm {
  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onSave: PropTypes.func.isRequired,
    defaultOrderStatus: PropTypes.string.isRequired,
    orderStatuses: PropTypes.array.isRequired,
    paymentTypes: PropTypes.object.isRequired,
  };

  static defaultProps = {
    title: 'Check Out',
    color: 'primary',
  };

  componentDidMount() {
    const { defaultOrderStatus, orderStatuses } = this.props;
    this.setOrderStatuses(orderStatuses);
    this.changeCurrentOrderStatus(defaultOrderStatus);
  }

  onSave = () => {
    const { payments, currentOrderStatus } = this.state;
    const { onSave } = this.props;
    const response = { payments, currentOrderStatus };
    onSave(response);
  }

  render() {
    const {
      color,
      title,
      isOpen,
      onClose,
      isLoading,
    } = this.props;

    const { payments } = this.state;

    return (
      <FullDialog
        color={color}
        title={title}
        isOpen={isOpen}
        isLoading={isLoading}
        onClose={onClose}
        onSave={this.onSave}
        enableAction={payments.length > 0}
      >
        { super.render() }
      </FullDialog>
    );
  }
}

export default CheckOutDialog;
