import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

const CheckOutPaymenMethods = ({
  paymentMethods,
  currentPaymentMethod,
  changePaymentMethod,
}) => (
  <Paper className="mt-3 p-2">
    <h4 className="mb-2 text-center">Caja/Banco</h4>
    <select
      className="form-control selcls w-100 edopedido"
      onChange={(event) => {
        const { value } = event.target;
        changePaymentMethod(value);
      }}
      defaultValue={currentPaymentMethod.referencia}
    >
      {
        paymentMethods.map(metohd => (
          <option
            key={`CheckOutConfig-${metohd.crmid}`}
            value={metohd.crmid}
            selected={currentPaymentMethod.crmid === metohd.crmid}
          >
            {metohd.referencia}
          </option>
        ))
      }
    </select>
  </Paper>
);


CheckOutPaymenMethods.propTypes = {
  paymentMethods: PropTypes.array.isRequired,
  currentPaymentMethod: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  changePaymentMethod: PropTypes.func.isRequired,
};

export default CheckOutPaymenMethods;
