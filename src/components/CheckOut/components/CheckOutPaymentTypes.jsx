import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import CreditCardIcon from '@material-ui/icons/CreditCard';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import DescriptionIcon from '@material-ui/icons/Description';
import CompareArrowsIcon from '@material-ui/icons/CompareArrows';

const getIcon = (paymentType) => {
  if (paymentType === 'Efectivo') {
    return <AttachMoneyIcon />;
  }

  if (/^Tarjeta/.test(paymentType)) {
    return <CreditCardIcon />;
  }

  if (paymentType === 'Cheque') {
    return <DescriptionIcon />;
  }

  if (paymentType === 'Transferencia') {
    return <CompareArrowsIcon />;
  }

  return '';
};

const CheckOutPaymentTypes = ({ paymentTypes, currentPaymentType, changePaymentType }) => (
  <Paper>
    <List>
      {
        paymentTypes.map(paymentType => (
          <ListItem
            key={`CheckOutPaymentTypes-${paymentType.id}`}
            button
            data-type={paymentType.id}
            onClick={
              (event) => {
                const { currentTarget } = event;
                const { type } = currentTarget.dataset;
                changePaymentType(type);
              }
            }
            selected={paymentType.id === currentPaymentType}
          >
            <ListItemIcon>
              { getIcon(paymentType.id) }
            </ListItemIcon>
            <ListItemText primary={paymentType.id} />
          </ListItem>
        ))
      }
    </List>
  </Paper>
);

CheckOutPaymentTypes.propTypes = {
  paymentTypes: PropTypes.array.isRequired,
  currentPaymentType: PropTypes.string.isRequired,
  changePaymentType: PropTypes.func.isRequired,
};

export default CheckOutPaymentTypes;
