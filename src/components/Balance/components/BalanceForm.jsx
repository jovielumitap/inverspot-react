/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import BalanceDatePicker from './BalanceDatePicker';
import BalanceTipo from './BalanceTipo';

import { removeSpecialCharacters } from '../../../helpers/tools';

class BalanceForm extends PureComponent {
  static propTypes = {
    corteDeCaja: PropTypes.array.isRequired,
    reloadCC: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  constructor(props) {
    super(props);

    /*
      mxn {
        current: x
        total: n
        hijos: [],
      }
      efectivo {
        current: x
        total: n
        hijos: [],
      }
    */

    const now = moment();
    const sunday = now.clone().weekday(0).format('YYYY-MM-DD');
    const saturday = now.clone().weekday(6).format('YYYY-MM-DD');

    this.allMainCheckboxes = {};
    this.allCheckboxes = {};

    this.state = {
      mainCheckboxes: {},
      checkboxes: {},
      totals: {},
      dateI: sunday,
      dateO: saturday,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { corteDeCaja } = this.props;
    if (corteDeCaja !== nextProps.corteDeCaja) {
      this.setState({
        mainCheckboxes: {},
        checkboxes: {},
        totals: {},
      });
    }
  }

  initData = () => {
    this.allMainCheckboxes = {};
    this.allCheckboxes = {};
  }

  changeDate = (date, id) => {
    if (id in this.state) {
      this.setState({ [id]: date });
    }
  }

  toggleMainCheckboxes = (id, value) => {
    const { mainCheckboxes } = this.state;
    if (id in mainCheckboxes) {
      const toggleValue = mainCheckboxes[id] ? false : Number.parseFloat(value);
      const regex = new RegExp(`^${removeSpecialCharacters(id)}`);

      let { checkboxes } = this.state;
      checkboxes = { ...checkboxes };

      const data = [];
      if (toggleValue) {
        for (const key in this.allCheckboxes) {
          if (regex.test(removeSpecialCharacters(key))) {
            const newId = key;
            const newValue = this.allCheckboxes[newId];
            data.push({ id: newId, value: newValue });
            checkboxes[newId] = newValue;
          }
        }
        this.addAllTotals(data);
      }

      else {
        for (const key in checkboxes) {
          if (regex.test(removeSpecialCharacters(key))) {
            const newId = key;
            const newValue = checkboxes[newId] ? checkboxes[newId] : 0;
            data.push({ id: newId, value: newValue });
            checkboxes[newId] = false;
          }
        }
        this.subtractAllTotals(data);
      }

      this.setState({ mainCheckboxes: { ...mainCheckboxes, [id]: toggleValue }, checkboxes });
    }
  }

  toggleCheckboxes = (id, value) => {
    const { checkboxes } = this.state;
    if (id in checkboxes) {
      const toggleValue = checkboxes[id] ? false : Number.parseFloat(value);

      if (toggleValue) {
        this.addTotal(id, value);
      }

      else {
        this.subtractTotal(id, value);
      }

      this.setState({ checkboxes: { ...checkboxes, [id]: toggleValue } });
    }
  }

  _operationsForTotal = (id, value, type) => {
    const { totals } = this.state;
    const newTotals = { ...totals };
    const words = id.split('-');

    while (words.length > 0) {
      const key = words.length === 1 ? words[0] : words.join('-');
      if (key in totals) {
        if (type === 'add') {
          newTotals[key] += Number.parseFloat(value);
        }

        else if (type === 'subtract') {
          newTotals[key] -= Number.parseFloat(value);
        }
      }
      words.pop();
    }

    this.setState({ totals: newTotals });
  }

  addTotal = (id, value) => {
    this._operationsForTotal(id, value, 'add');
  }

  subtractTotal = (id, value) => {
    this._operationsForTotal(id, value, 'subtract');
  }

  addAllTotals = () => {

  }

  subtractAllTotals = () => {

  }

  render() {
    const { corteDeCaja, reloadCC, isLoading } = this.props;
    const {
      mainCheckboxes,
      checkboxes,
      totals,
      dateI,
      dateO,
    } = this.state;

    return (
      <div className="balance__contenedor">
        <BalanceDatePicker
          dateI={dateI}
          dateO={dateO}
          handleDateChange={this.changeDate}
          handleOnClick={() => {
            const range = `${dateI} to ${dateO}`;
            reloadCC(range);
          }}
        />
        {
          !isLoading && (
            <BalanceTipo
              parentName=""
              tipos={corteDeCaja}

              mainCheckboxes={mainCheckboxes}
              checkboxes={checkboxes}
              totals={totals}
              toggleMainCheckboxes={this.toggleMainCheckboxes}
              toggleCheckboxes={this.toggleCheckboxes}
            />
          )
        }
      </div>
    );
  }
}

export default BalanceForm;
