import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from '@material-ui/core';

class WharehouseTable extends PureComponent {
  static propTypes = {
    table: PropTypes.object.isRequired,
    dispatchChangeFieldValue: PropTypes.func.isRequired,
    activity: PropTypes.string.isRequired,
  };

  handleChange = (event, crmdi) => {
    const { dispatchChangeFieldValue } = this.props;
    const { value } = event.target;
    const obj = { value, crmdi };
    dispatchChangeFieldValue(obj);
  };

  handleRowClass = (item) => {
    const field = parseInt(item.field, 10);
    const { activity } = this.props;
    switch (activity) {
      case 'deliver':
        if (field === item.toDeliver) {
          return 'productsTable__done';
        }
        if (field > item.qtyinstock) {
          return 'productsTable__danger';
        }
        break;
      case 'refund':
        if (field === item.delivered) {
          return 'productsTable__done';
        }
        if (field > item.delivered) {
          return 'productsTable__danger';
        }
        break;
      default:
        return '';
    }
    return '';
  };

  getInputProps = (item) => {
    const { activity } = this.props;
    switch (activity) {
      case 'deliver':
        return { min: 0, max: item.toDeliver };
      case 'refund':
        return { min: 0, max: item.delivered };
      default:
        return { min: 0 };
    }
  };

  disableField = (item) => {
    const { activity } = this.props;
    switch (activity) {
      case 'deliver':
        if (item.toDeliver === 0 || item.qtyinstock === 0) { return true; }
        break;
      case 'refund':
        if (item.delivered === 0) { return true; }
        break;
      default: return false;
    }
  }

  render() {
    const { table, activity } = this.props;
    return (
      <Table className="w-100 productsTable">
        <TableHead>
          <TableRow>
            <TableCell className="productsTable__codigo">Codigo</TableCell>
            <TableCell className="productsTable__productos">
              {'Descripción de Productos'}
            </TableCell>
            <TableCell className="productsTable__simple">Cantidad</TableCell>
            <TableCell className="productsTable__simple">Entregados</TableCell>
            <TableCell className="productsTable__simple">Devueltos</TableCell>
            <TableCell className="productsTable__simple">
              {activity === 'deliver' ? 'Por Entregar' : 'Por Devolver'}
            </TableCell>
            <TableCell className="productsTable__simple">Existencia</TableCell>
            <TableCell className="productsTable__simple">
              {activity === 'deliver' ? 'Entregar' : 'Devolver'}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.items.map(item => (
            <TableRow
              className={this.handleRowClass(item)}
              key={`table_${item.crmid}`}
            >
              <TableCell component="th" scope="row">
                {item.crmid}
              </TableCell>
              <TableCell component="th" scope="row">
                {item.productname}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {item.quantity}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {item.delivered}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {item.refunded}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {activity === 'deliver' ? item.toDeliver : item.toRefund }
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                {activity === 'deliver'
                  ? item.qtyinstock - item.field
                  : item.qtyinstock + item.field}
              </TableCell>
              <TableCell component="th" scope="row" align="center">
                <TextField
                  id="number-delivers"
                  value={item.field}
                  type="number"
                  InputLabelProps={{ shrink: true }}
                  margin="normal"
                  onChange={(event) => {
                    this.handleChange(event, item.crmid);
                  }}
                  inputProps={{ min: 0, max: item.limit }}
                  disabled={this.disableField(item)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

export default WharehouseTable;
