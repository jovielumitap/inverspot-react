import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';

import { formatMoney } from '../../../helpers/tools';

class DiscountForm extends PureComponent {
  static propTypes = {
    totalToPay: PropTypes.number,
  }

  static defaultProps = {
    totalToPay: 666,
  }

  constructor(props) {
    super(props);
    this.state = { totalDiscount: 0 };
    this.amount = null;
    this.percentage = null;
  }

  changeDiscount = () => {
    const { totalToPay } = this.props;
    const amount = Number.parseFloat(this.amount.value) || 0;
    const percentage = Number.parseFloat(this.percentage.value) || 0;

    const totalPersentaje = totalToPay * (percentage / 100);
    const totalDiscount = totalPersentaje + amount;

    this.setState({ totalDiscount });
  }

  render() {
    const { totalToPay } = this.props;
    const { totalDiscount } = this.state;
    return (
      <div>
        <h2 className="text-center">
          { `Monto: ${formatMoney(totalToPay)}` }
        </h2>
        <TextField
          id="amount"
          label="Monto"
          placeholder="0$"
          margin="normal"
          className="w-100"
          type="number"
          onChange={this.changeDiscount}
          inputRef={
            (node) => {
              this.amount = node;
            }
          }
        />
        <TextField
          id="percentage"
          label="Porsentaje"
          placeholder="0%"
          margin="normal"
          className="w-100"
          type="number"
          onChange={this.changeDiscount}
          inputRef={
            (node) => {
              this.percentage = node;
            }
          }
        />
        <h2 className="mt-2 text-center">
          { `Total: ${formatMoney(totalToPay - totalDiscount)}` }
        </h2>
      </div>
    );
  }
}

export default DiscountForm;
