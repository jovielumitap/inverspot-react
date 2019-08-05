/* eslint-disable object-curly-newline */

import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import AddCircleIcon from '@material-ui/icons/AddCircle';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const CheckOutMoneyInput = ({ addPayment, money, changeMoney, fillMoney }) => (
  <Paper>
    <div className="check-out__money-input-container">
      <Input
        id="input-with-icon-adornment"
        className="check-out__money-input-input w-100"
        startAdornment={(
          <InputAdornment
            className="cursor-pointer"
            position="start"
            onClick={fillMoney}
          >
            <AttachMoneyIcon />
          </InputAdornment>
        )}
        type="number"
        min="0"
        placeholder="0"
        value={money}
        autoFocus
        onKeyPress={
          (event) => {
            const { target, key } = event;
            const { value } = target;

            if (key === 'Enter') {
              event.preventDefault();
              addPayment();
              return false;
            }

            if (key === '.' && !value.includes('.')) {
              return false;
            }

            if (Number.isNaN(Number(key))) {
              event.preventDefault();
              return false;
            }
            return true;
          }
        }
        onChange={
          (event) => {
            const { value } = event.target;
            changeMoney(value);
          }
        }
      />
      <IconButton
        onClick={addPayment}
      >
        <AddCircleIcon />
      </IconButton>
    </div>
  </Paper>
);

CheckOutMoneyInput.propTypes = {
  addPayment: PropTypes.func.isRequired,
  money: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  changeMoney: PropTypes.func.isRequired,
  fillMoney: PropTypes.func.isRequired,
};

export default CheckOutMoneyInput;
