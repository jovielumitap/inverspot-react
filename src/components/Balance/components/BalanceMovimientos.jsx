
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

import BalanceDetalles from './BalanceDetalles';

import { formatMoney, removeSpecialCharacters } from '../../../helpers/tools';

const BalanceMovimientos = ({
  parentName,
  movimientos,
  checkboxes,
  _checkboxes,
  toggleMainCheckboxes,
  toggleCheckboxes,
  registerCheckbox,
}) => {
  const [checked, setChecked] = useState([]);

  const handleToggle = id => () => {
    const newChecked = { ...checked, [id]: !(checked[id]) };
    setChecked(newChecked);
  };

  return (
    movimientos.map((movimiento) => {
      const {
        label,
        total,
        cantidad,
        detalles,
      } = movimiento;
      const id = `${parentName}-${label}`;
      const isOpen = Boolean(checked[id]);

      let totalTipos = 0;
      let cantidadTipos = 0;
      const regex = new RegExp(`^${removeSpecialCharacters(id)}`);
      for (const key in checkboxes) {
        const check = Boolean(checkboxes[key]);
        if (key !== id && regex.test(removeSpecialCharacters(key)) && check) {
          const data = _checkboxes[key];
          totalTipos += Number.parseFloat(data.monto);
          cantidadTipos += 1;
        }
      }

      return (
        <List
          key={id}
          ref={() => {
            registerCheckbox(id, movimiento);
          }}
        >
          <ListItem button onClick={handleToggle(id)} className="detalle_box">
            {
              isOpen
                ? <ExpandLess />
                : <ExpandMore />
            }
            <ListItemText
              id={label}
              primary={(
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    <div className="balance-detalles__flex-space ">
                      <strong>
                        { label }
                      </strong>
                      <span className="detalle_cantidad">{`${cantidadTipos}/${cantidad}`}</span>
                      <strong>
                        { `$${formatMoney(totalTipos)}` }
                      </strong>
                    </div>
                  </Typography>
                </>
              )}
            />
            <Checkbox
              edge="end"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                toggleMainCheckboxes(id, total);
              }}
              onChange={() => {}}
              inputProps={{ 'aria-labelledby': true }}
              checked={Boolean(checkboxes[id])}
              className="balance-detalles__no-padding-lr"
            />
          </ListItem>
          <Collapse in={isOpen} timeout="auto">
            <BalanceDetalles
              parentName={id}
              detalles={detalles}
              checkboxes={checkboxes}
              toggleCheckboxes={toggleCheckboxes}
              registerCheckbox={registerCheckbox}
            />
          </Collapse>
        </List>
      );
    })
  );
};

BalanceMovimientos.propTypes = {
  parentName: PropTypes.string.isRequired,
  movimientos: PropTypes.array.isRequired,

  checkboxes: PropTypes.object.isRequired,
  _checkboxes: PropTypes.object.isRequired,

  toggleMainCheckboxes: PropTypes.func.isRequired,
  toggleCheckboxes: PropTypes.func.isRequired,
};

export default BalanceMovimientos;
