import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';

import Grid from '@material-ui/core/Grid';

import CheckOutMoneyInput from './CheckOutMoneyInput';
import CheckOutNumberKeyBoard from './CheckOutNumberKeyBoard';
import CheckOutPaymentType from './CheckOutPaymentTypes';
import CheckOutPaymenMethods from './CheckOutPaymenMethods';
import CheckOutPayments from './CheckOutPayments';
import CheckOutConfig from './CheckOutConfig';

class CheckOutForm extends PureComponent {
  static propTypes = {
    totalToPay: PropTypes.number,
    paymentTypes: PropTypes.object.isRequired,
  }

  static defaultProps = {
    totalToPay: 0,
  }

  constructor(props) {
    super(props);
    this.state = {
      payments: [],
      paymentMethods: [],
      currentPaymentType: '',
      currentPaymentMethod: '',
      money: '',
      currentMoney: 0,
      orderStatuses: [],
      currentOrderStatus: '',
    };
  }

  componentDidMount() {
    const input = document.querySelector('#input-with-icon-adornment');
    if (input) {
      input.focus();
    }
  }

  componentWillReceiveProps(nextProps) {
    const { currentPaymentType } = this.state;
    const { paymentTypes } = nextProps;
    const key = Object.keys(paymentTypes)[0];
    if (key && currentPaymentType !== key) {
      const paymentMethods = paymentTypes[key];
      const currentPaymentMethod = paymentMethods[0];
      this.setState({ paymentMethods, currentPaymentType: key, currentPaymentMethod });
    }
  }

  _formatMoney = number => (
    Number.parseFloat(number) || ''
  )

  addPayment = () => {
    const { currentPaymentType, currentPaymentMethod } = this.state;
    let { payments, money, currentMoney } = this.state;

    money = this._formatMoney(money) || 0;

    const newPayment = {
      tcybid: currentPaymentMethod,
      monto: money,
      metodo: currentPaymentType,
    };
    payments = [...payments, newPayment];
    currentMoney += money;

    if (currentPaymentMethod !== '') {
      this.setState({
        payments,
        currentMoney,
        money: '',
        currentPaymentMethod: '',
      });
    }
  }

  removePayment = (index) => {
    let { payments, currentMoney } = this.state;
    payments = [...payments];

    const payment = payments[index];
    currentMoney -= payment.monto;

    payments.splice(index, 1);

    this.setState({ payments, currentMoney });
  }

  changePaymentType = (currentPaymentType) => {
    const { paymentTypes } = this.props;
    const paymentMethods = paymentTypes[currentPaymentType];
    const currentPaymentMethod = paymentMethods[0];
    this.setState({ paymentMethods, currentPaymentType, currentPaymentMethod });
  }

  changeMoney = (money) => {
    const newValue = money;
    this.setState({ money: newValue });
  }

  appendDigitToMoney = (digit) => {
    const { money } = this.state;
    const currentValue = money.toString();
    const newValue = digit.toString();

    let result = currentValue + newValue;
    result = this._formatMoney(result);

    this.setState({ money: result });
  }

  fillMoney = () => {
    const { currentMoney } = this.state;
    const { totalToPay } = this.props;
    const money = totalToPay - currentMoney;
    this.setState({ money });
  }

  setOrderStatuses = (orderStatuses) => {
    this.setState({ orderStatuses });
  }

  changeCurrentOrderStatus = (currentOrderStatus) => {
    this.setState({ currentOrderStatus });
  }

  formatPaymentTypes = () => {
    const { paymentTypes } = this.props;
    const newPaymentTypes = Object.keys(paymentTypes).map(id => ({
      id,
      methods: paymentTypes[id],
    }));
    return newPaymentTypes;
  }

  changePaymentMethod = (currentPaymentMethod) => {
    this.setState({ currentPaymentMethod });
  }

  render() {
    const {
      payments,
      paymentMethods,
      currentPaymentType,
      currentPaymentMethod,
      currentMoney,
      money,
      orderStatuses,
      currentOrderStatus,
    } = this.state;
    const { totalToPay } = this.props;
    const newPaymentTypes = this.formatPaymentTypes();

    return (
      <form className="container">
        <Grid container spacing={32}>
          <Grid item sm={7} xs={12}>
            <CheckOutMoneyInput
              addPayment={this.addPayment}
              money={money}
              changeMoney={this.changeMoney}
              fillMoney={this.fillMoney}
            />
            <br />
            <Grid container spacing={16}>
              {
                (!isMobile) && (
                  <Grid item sm={8}>
                    <CheckOutNumberKeyBoard
                      appendDigitToMoney={this.appendDigitToMoney}
                    />
                  </Grid>
                )
              }
              <Grid item sm={4} xs={12}>
                <CheckOutPaymentType
                  paymentTypes={newPaymentTypes}
                  currentPaymentType={currentPaymentType}
                  changePaymentType={this.changePaymentType}
                />
                <CheckOutPaymenMethods
                  paymentMethods={paymentMethods}
                  currentPaymentMethod={currentPaymentMethod}
                  changePaymentMethod={this.changePaymentMethod}
                />
                {
                  orderStatuses.length > 0 && (
                    <CheckOutConfig
                      orderStatuses={orderStatuses}
                      currentOrderStatus={currentOrderStatus}
                      changeCurrentOrderStatus={this.changeCurrentOrderStatus}
                    />
                  )
                }
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={5} xs={12}>
            <CheckOutPayments
              payments={payments}
              removePayment={this.removePayment}
              currentMoney={currentMoney}
              totalToPay={totalToPay}
            />
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default CheckOutForm;
