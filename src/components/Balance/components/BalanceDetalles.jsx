/* eslint-disable camelcase */

import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import classnames from 'classnames';

import { formatMoney } from '../../../helpers/tools';

const BalanceDetalles = ({
  parentName,
  detalles,
  checkboxes,
  toggleCheckboxes,
  registerCheckbox,
}) => (
  <List dense>
    {
      detalles.map((detalle, index) => {
        const {
          id,
          referencia,
          monto,
          fecha_realizado,
          banco,
          cliente,
        } = detalle;
        const labelId = `${parentName}-${id}`;
        return (
          <ListItem
            key={labelId}
            button
            onClick={() => {
              toggleCheckboxes(labelId);
            }}
            className={classnames('detalle_tipos_separador', {
              'detalle_tipos_separador-pair': index % 2 === 0,
              'detalle_tipos_separador-none': index % 2 !== 0,
            })}
            ref={() => {
              registerCheckbox(labelId, detalle);
            }}
          >
            <ListItemText
              id={labelId}
              primary={(
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    <div className="balance-detalles__flex-space">
                      <strong>
                        { referencia }
                      </strong>
                      <strong>
                        { `$${formatMoney(monto)}` }
                      </strong>
                    </div>
                  </Typography>
                </>
              )}
              secondary={(
                <>
                  <span className="balance-detalles__flex-group">
                    <span>
                      { fecha_realizado }
                    </span>
                    <span>
                      { banco }
                    </span>
                    <span>
                      { cliente }
                    </span>
                  </span>
                </>
              )}
            />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={() => {
                  toggleCheckboxes(labelId, monto);
                }}
                inputProps={{ 'aria-labelledby': labelId }}
                className="balance-detalles__top-up"
                checked={Boolean(checkboxes[labelId])}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })
    }
  </List>
);

BalanceDetalles.propTypes = {
  parentName: PropTypes.string.isRequired,
  detalles: PropTypes.array.isRequired,

  checkboxes: PropTypes.object.isRequired,
  toggleCheckboxes: PropTypes.func.isRequired,
  registerCheckbox: PropTypes.func.isRequired,
};

export default BalanceDetalles;
