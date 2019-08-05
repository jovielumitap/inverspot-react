import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';

const CheckOutNumberKeyBoard = ({ appendDigitToMoney }) => (
  <Paper className="check-out__key-board-container">
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className="h-100"
      spacing={8}
    >
      {
        new Array(9).fill(0).map((n, i) => (
          <Grid item xs={4} className="text-center" key={`CheckOutNumberKeyBoard-${n + i}`}>
            <Button
              className="check-out__key-board-number"
              onClick={() => appendDigitToMoney(i + 1)}
            >
              { i + 1 }
            </Button>
          </Grid>
        ))
      }
      <Grid item xs={4} className="text-center">
        <Button
          className="check-out__key-board-number"
          onClick={() => appendDigitToMoney(0)}
        >
          0
        </Button>
      </Grid>
    </Grid>
  </Paper>
);

CheckOutNumberKeyBoard.propTypes = {
  appendDigitToMoney: PropTypes.func.isRequired,
};

export default CheckOutNumberKeyBoard;
