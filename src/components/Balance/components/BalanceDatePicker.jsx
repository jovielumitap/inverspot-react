import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core//IconButton';
import SearchIcon from '@material-ui/icons/Search';

const BalanceDatePicker = ({
  dateI,
  dateO,
  handleDateChange,
  handleOnClick,
}) => (
  <div className="balance__contenedor-hijo">
    <TextField
      id="dateI"
      label="Fecha Inicio"
      type="date"
      value={dateI}
      className="mr-3"
      InputLabelProps={{
        shrink: true,
      }}
      onChange={event => handleDateChange(event.target.value, 'dateI')}
    />
    <TextField
      id="dateI"
      label="Fecha Fin"
      type="date"
      value={dateO}
      className="mr-2"
      InputLabelProps={{
        shrink: true,
      }}
      onChange={event => handleDateChange(event.target.value, 'dateO')}
    />
    <IconButton
      color="secondary"
      onClick={handleOnClick}
    >
      <SearchIcon />
    </IconButton>
  </div>
);

BalanceDatePicker.propTypes = {
  dateI: PropTypes.string.isRequired,
  dateO: PropTypes.string.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default BalanceDatePicker;
