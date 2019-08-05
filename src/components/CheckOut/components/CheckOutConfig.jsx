import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

const CheckOutConfig = ({
  orderStatuses,
  currentOrderStatus,
  changeCurrentOrderStatus,
}) => (
  <Paper className="mt-3 p-2">
    <h4 className="mb-2 text-center">Estado de la orden</h4>
    <select
      className="form-control selcls w-100 edopedido"
      onChange={(event) => {
        const { value } = event.target;
        changeCurrentOrderStatus(value);
      }}
      defaultValue={currentOrderStatus}
    >
      {
        orderStatuses.map(status => (
          <option
            key={`CheckOutConfig-${status.id}`}
            value={status.id}
          >
            {status.value}
          </option>
        ))
      }
    </select>
  </Paper>
);

CheckOutConfig.propTypes = {
  orderStatuses: PropTypes.array.isRequired,
  currentOrderStatus: PropTypes.string.isRequired,
  changeCurrentOrderStatus: PropTypes.func.isRequired,
};

export default CheckOutConfig;
