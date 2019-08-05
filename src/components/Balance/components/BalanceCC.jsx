import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import FullDialog from '../../FullDialog';
import BalanceDatePicker from './BalanceDatePicker';
import BalanceTipo from './BalanceTipo';

import withBalanceCheckboxes from '../hocs/withBalanceCheckboxes';

class BalanceCC extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onSave: PropTypes.func.isRequired,
    corteDeCaja: PropTypes.array.isRequired,
    reloadCC: PropTypes.func.isRequired,

    checkboxes: PropTypes.object.isRequired,
    _checkboxes: PropTypes.object.isRequired,
    toggleCheckbox: PropTypes.func.isRequired,
    registerCheckbox: PropTypes.func.isRequired,
    getChecked: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    const now = moment();
    const sunday = now.clone().weekday(0).format('YYYY-MM-DD');
    const saturday = now.clone().weekday(6).format('YYYY-MM-DD');

    this.state = {
      dateI: sunday,
      dateO: saturday,
    };
  }

  changeDate = (date, id) => {
    if (id in this.state) {
      this.setState({ [id]: date });
    }
  }

  onSave = () => {
    const { onSave, getChecked } = this.props;
    const { dateI, dateO } = this.state;

    const { selectedCheckboxes, unselectedCheckboxes } = getChecked();

    onSave({
      selectedCheckboxes,
      unselectedCheckboxes,
      startDate: dateI,
      endDate: dateO,
    });
  }

  render() {
    const {
      isOpen,
      onClose,
      isLoading,
      corteDeCaja,
      reloadCC,

      checkboxes,
      _checkboxes,
      toggleCheckbox,
      registerCheckbox,
    } = this.props;
    const {
      dateI,
      dateO,
    } = this.state;
    return (
      <FullDialog
        title="Solicitar un Corte de Caja"
        isOpen={isOpen}
        isLoading={isLoading}
        onClose={onClose}
        onSave={this.onSave}
      >
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
                checkboxes={checkboxes}
                _checkboxes={_checkboxes}
                registerCheckbox={registerCheckbox}
                toggleMainCheckboxes={toggleCheckbox}
                toggleCheckboxes={toggleCheckbox}
              />
            )
          }
        </div>
      </FullDialog>
    );
  }
}

export default withBalanceCheckboxes(BalanceCC);
