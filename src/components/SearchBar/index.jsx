/* eslint-disable react/jsx-no-duplicate-props  */

import React from 'react';
import PropTypes from 'prop-types';

import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

import styles from './styles';

let timeout = null;

const SearchBar = ({
  classes,
  handleOnKeyPress,
  handleChangeSearch,
}) => (
  <TextField
    onChange={(event) => {
      handleChangeSearch(event);
    }}
    pattern="([\w|\s|\n])*\w+"
    className="search_bar"
    type="search"
    classes={{
      root: classes.inputRoot,
    }}
    variant="outlined"
    onKeyUp={(e) => {
      const { value } = e.target;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        handleOnKeyPress(value);
      }, 750);
    }}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
    inputProps={{
      style: { padding: '0.8em' },
    }}
  />
);

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
  handleOnKeyPress: PropTypes.func,
  handleChangeSearch: PropTypes.func,
};

SearchBar.defaultProps = {
  handleOnKeyPress: () => {},
  handleChangeSearch: () => {},
};

export default withStyles(styles)(SearchBar);
