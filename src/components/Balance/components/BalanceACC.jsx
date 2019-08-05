import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';

import FullDialog from '../../FullDialog';
import BalanceTipo from './BalanceTipo';

import withBalanceCheckboxes from '../hocs/withBalanceCheckboxes';

class BalanceACC extends PureComponent {
  static propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onSave: PropTypes.func.isRequired,
    cortesDeCaja: PropTypes.array.isRequired,

    checkboxes: PropTypes.object.isRequired,
    _checkboxes: PropTypes.object.isRequired,
    toggleCheckbox: PropTypes.func.isRequired,
    registerCheckbox: PropTypes.func.isRequired,
    getChecked: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      corteCaja: {},
      opciones: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    const { cortesDeCaja } = this.props;
    if (cortesDeCaja !== nextProps.cortesDeCaja) {
      const opciones = nextProps.cortesDeCaja.map((user, index) => ({
        value: index,
        label: user.nombre,
      }));

      this.setState({
        corteCaja: nextProps.cortesDeCaja[0] || {},
        opciones,
      });
    }
  }

  onChange = (select) => {
    let corteCaja = {};
    if (select) {
      const id = select.value;
      const { cortesDeCaja } = this.props;
      corteCaja = cortesDeCaja[id] || {};
    }
    this.setState({ corteCaja });
  }

  onSave = () => {
    const { getChecked, onSave } = this.props;
    const data = getChecked();
    onSave(data);
  }

  render() {
    const {
      isOpen,
      onClose,
      isLoading,
      checkboxes,
      _checkboxes,
      toggleCheckbox,
      registerCheckbox,
    } = this.props;
    const {
      corteCaja,
      opciones,
    } = this.state;
    return (
      <FullDialog
        title="Recibir un Corte de Caja"
        isOpen={isOpen}
        isLoading={isLoading}
        onClose={onClose}
        onSave={this.onSave}
        color="secondary"
      >
        <div>
          <Select
            className="basic-single"
            classNamePrefix="select"
            isClearable
            isSearchable
            name="usuarios"
            options={opciones}
            onChange={this.onChange}
          />
          <h1 className="mt-5 text-center">
            { corteCaja.nombre || '' }
          </h1>
          <BalanceTipo
            parentName=""
            tipos={corteCaja.monedas || []}

            checkboxes={checkboxes}
            _checkboxes={_checkboxes}
            registerCheckbox={registerCheckbox}
            toggleMainCheckboxes={toggleCheckbox}
            toggleCheckboxes={toggleCheckbox}
          />
        </div>
      </FullDialog>
    );
  }
}

export default withBalanceCheckboxes(BalanceACC);
