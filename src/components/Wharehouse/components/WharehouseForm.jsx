import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { isMobile } from 'react-device-detect';

import {
  Button,
  FormControl,
  FormLabel,
  TextField,
  LinearProgress,
  InputAdornment,
} from '@material-ui/core';

import { Spinner } from 'reactstrap';

import WharehouseTable from './WharehouseTable';
import WharehouseCarts from './WharehouseCarts';

class WharehouseForm extends PureComponent {
  static propTypes = {
    loads: PropTypes.object.isRequired,
    table: PropTypes.object.isRequired,
    activity: PropTypes.string.isRequired,
    dispatchSelectEmpty: PropTypes.func.isRequired,
    dispatchChangeComment: PropTypes.func.isRequired,
    dispatchSelectToRefunded: PropTypes.func.isRequired,
    dispatchSelectToDelivered: PropTypes.func.isRequired,
    dispatchChangeFieldValue: PropTypes.func.isRequired,
  };

  getDate = () => {
    const actual = new Date();
    const day = `0${actual.getDate()}`.slice(-2);
    const month = `0${actual.getMonth() + 1}`.slice(-2);
    const year = actual.getFullYear();

    return `${year}-${month}-${day}`;
  };

  getInputsAdornaments = () => {
    const { loads } = this.props;
    if (loads.tableIsLoading) {
      return {
        endAdornment: (
          <InputAdornment position="end">
            <Spinner />
          </InputAdornment>
        ),
      };
    }
    return {};
  };

  changeComment = (value) => {
    const { dispatchChangeComment } = this.props;
    dispatchChangeComment(value);
  }

  render() {
    const {
      table,
      loads,
      activity,
      dispatchSelectToDelivered,
      dispatchSelectEmpty,
      dispatchSelectToRefunded,
      dispatchChangeFieldValue,
    } = this.props;
    const focusUsernameInputField = (input) => {
      // eslint-disable-next-line no-unused-expressions
      if (loads.tableIsLoading) { input && input.focus(); }
    };
    return (
      <FormControl className="w-100 form_control_deliver">
        <FormLabel>{`Referencia: ${table.ref}`}</FormLabel>
        <TextField
          id="outlined-comments"
          label="Comentarios"
          margin="normal"
          variant="outlined"
          multiline
          rows={1}
          rowsMax={4}
          inputRef={focusUsernameInputField}
          onKeyUp={(e) => {
            const { value } = e.target;
            this.changeComment(value);
          }}
        />
        <div className="w-100 justify-content-between d-flex">
          <div className="w-100 pr-2">
            <TextField
              className="w-100"
              id="outlined-date"
              margin="normal"
              label="Fecha del Movimiento"
              type="date"
              value={table.date}
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={this.getInputsAdornaments()}
              disabled
            />
          </div>
          <div className="w-100 pl-2">
            <TextField
              className="w-100"
              id="outlined-warehouse"
              label="De Almacén ..."
              margin="normal"
              value={table.store.name}
              disabled
              InputProps={this.getInputsAdornaments()}
            />
          </div>
        </div>
        <div className="w-100 d-flex justify-content-between mt-4">
          <div className="w-100 pr-2">
            <TextField
              value={table.toSell}
              className="w-100"
              id="outlined-sell"
              label="A venta ..."
              disabled
              margin="normal"
              InputProps={this.getInputsAdornaments()}
            />
          </div>
          <div className="w-100 pl-2">
            <TextField
              value={table.account.nombre}
              className="w-100"
              id="outlined-account"
              label="Empresa cuenta ..."
              margin="normal"
              disabled
              InputProps={this.getInputsAdornaments()}
            />
          </div>
        </div>
        {activity === 'deliver' ? (
          <div className="wharehouse_form_btn w-100 d-flex justify-content-around mt-4">
            <Button
              onClick={() => {
                dispatchSelectToDelivered();
              }}
              variant="outlined"
              color="primary"
            >
              {'Seleccionar Por Entregar'}
            </Button>
            <Button
              onClick={() => {
                dispatchSelectEmpty();
              }}
              variant="outlined"
              color="secondary"
            >
              {'Seleccionar Nada'}
            </Button>
          </div>
        ) : (
          <div className="wharehouse_form_btn w-100 d-flex justify-content-around mt-4">
            <Button
              onClick={() => {
                dispatchSelectToRefunded();
              }}
              variant="outlined"
              color="primary"
            >
              {'Devolver Todo'}
            </Button>
            <Button
              onClick={() => {
                dispatchSelectEmpty();
              }}
              variant="outlined"
              color="secondary"
            >
              {'Devolver Nada'}
            </Button>
          </div>
        )}
        {
          loads.tableIsLoading && (
            <div className="w-100 h-100 py-4 mt-2">
              <LinearProgress color="primary" />
            </div>
          )
        }
        <div className="w-100 d-flex justify-content-center mt-2">
          {isMobile ? (
            <WharehouseCarts
              table={table}
              activity={activity}
              dispatchChangeFieldValue={dispatchChangeFieldValue}
            />
          ) : (
            <WharehouseTable
              table={table}
              activity={activity}
              dispatchChangeFieldValue={dispatchChangeFieldValue}
            />
          )}
        </div>
      </FormControl>
    );
  }
}

export default WharehouseForm;
