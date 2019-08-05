import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  TextField,
} from '@material-ui/core';

import { ExpandMoreRounded } from '@material-ui/icons';

class WharehouseCarts extends PureComponent {
  static propTypes = {
    table: PropTypes.object.isRequired,
    activity: PropTypes.string.isRequired,
    dispatchChangeFieldValue: PropTypes.func.isRequired,
  };

  handleChange = (event, crmdi) => {
    const { dispatchChangeFieldValue } = this.props;
    const { value } = event.target;
    const obj = { value, crmdi };
    dispatchChangeFieldValue(obj);
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
      <div className="wharehouse_cards_container w-100 d-flex flex-column">
        {table.items.map(item => (
          <ExpansionPanel key={`cards_${item.crmid}`}>
            <ExpansionPanelSummary
              className="d-flex justify-content-between"
              expandIcon={<ExpandMoreRounded />}
            >
              <div className="w-100">{item.crmid}</div>
              <div className="w-100">{item.productname}</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className="d-flex justify-content-between">
              <div className="w-100 mb-4">
                <div className="w-100">{`Cantidad: ${item.quantity}`}</div>
              </div>
              <div className="w-100 mb-4">
                <div className="w-100">{`Entregados: ${item.delivered}`}</div>
                <div className="w-100">{`Devueltos: ${item.refunded}`}</div>
              </div>
              <div className="w-100 mb-4">
                <div className="w-100">{`Devueltos: ${item.toDeliver}`}</div>
                <div className="w-100">{`Existencia: ${item.qtyinstock}`}</div>
              </div>
            </ExpansionPanelDetails>
            <ExpansionPanelActions>
              <div className="w-auto mr-4">
                {activity === 'deliver' ? 'Entregar: ' : 'Devolver: '}
              </div>
              <TextField
                id="number-delivers"
                value={item.field}
                type="number"
                InputLabelProps={{ shrink: true }}
                margin="normal"
                onChange={(event) => { this.handleChange(event, item.crmid); }}
                inputProps={this.getInputProps(item)}
                disabled={this.disableField(item)}
              />
            </ExpansionPanelActions>
          </ExpansionPanel>
        ))}
      </div>
    );
  }
}

export default WharehouseCarts;
