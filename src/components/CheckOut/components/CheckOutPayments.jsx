/* eslint-disable object-curly-newline */

import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

import { formatMoney } from '../../../helpers/tools';

const CheckOutPayments = ({ payments, removePayment, currentMoney, totalToPay }) => (
  <>
    <Paper className="check-out__item-paper text-center">
      <h3>
        { `Total: ${formatMoney(totalToPay)}$`}
      </h3>
    </Paper>
    <br />
    <Paper className="check-out__item-paper check-out__item-scroll">
      <List>
        {
          payments.map((payment, index) => (
            <div key={`CheckOutPayments-${payment.metodo}-${index + 1}`}>
              <ListItem>
                <ListItemText
                  primary={payment.metodo}
                  secondary={`${formatMoney(payment.monto)}$`}
                />
                <ListItemSecondaryAction>
                  <IconButton
                    aria-label="Delete"
                    onClick={() => removePayment(index)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
              { index < (payments.length - 1) && <Divider /> }
            </div>
          ))
        }
      </List>
    </Paper>
    <br />
    <Paper className="check-out__item-paper text-right">
      <h3>{`Pagado: ${formatMoney(currentMoney)}$`}</h3>
      <h3>{`Por Pagar: ${(totalToPay - currentMoney) < 0 ? 0 : formatMoney(totalToPay - currentMoney)}$`}</h3>
      {
        (totalToPay - currentMoney) < 0 && (
          <h3>{`Cambio: ${formatMoney(currentMoney - totalToPay)}$`}</h3>
        )
      }
    </Paper>
  </>
);

CheckOutPayments.propTypes = {
  payments: PropTypes.array.isRequired,
  removePayment: PropTypes.func.isRequired,
  currentMoney: PropTypes.number.isRequired,
  totalToPay: PropTypes.number.isRequired,
};

export default CheckOutPayments;
