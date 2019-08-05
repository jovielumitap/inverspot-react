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

import BalanceMovimientos from './BalanceMovimientos';

import { formatMoney } from '../../../helpers/tools';

const BalanceTipo = ({
  parentName,
  tipos,
  checkboxes,
  _checkboxes,
  toggleMainCheckboxes,
  toggleCheckboxes,
  registerCheckbox,
}) => {
  const [checked, setChecked] = useState({});

  const handleToggle = id => () => {
    const newChecked = { ...checked, [id]: !(checked[id]) };
    setChecked(newChecked);
  };

  return (
    <div className="balance__contenedor-hijo balance__lista">
      {
        tipos.map((tipo) => {
          const {
            label,
            total,
            cantidad,
            movimientos,
          } = tipo;
          const id = parentName ? `${parentName}-${label}` : label;
          const isOpen = Boolean(checked[id]);

          let totalTipos = 0;
          let cantidadTipos = 0;
          const regex = new RegExp(`^${id}-.+-`);
          // eslint-disable-next-line
          for(const id in checkboxes) {
            const check = Boolean(checkboxes[id]);
            if (regex.test(id) && check) {
              const data = _checkboxes[id];
              totalTipos += Number.parseFloat(data.monto);
              cantidadTipos += 1;
            }
          }

          return (
            <List
              key={id}
              ref={() => {
                registerCheckbox(id, tipo);
              }}
            >
              <ListItem button onClick={handleToggle(id)} className="detalle_box detalle_box_divider">
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
                        <div className="balance-detalles__flex-space">
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
                  inputProps={{ 'aria-labelledby': true }}
                  checked={Boolean(checkboxes[id])}
                  className="balance-detalles__no-padding-lr"
                />
              </ListItem>
              <Collapse in={isOpen} timeout="auto" className="detalle_box-wrapper">
                <BalanceMovimientos
                  parentName={id}
                  movimientos={movimientos}

                  checkboxes={checkboxes}
                  _checkboxes={_checkboxes}
                  toggleMainCheckboxes={toggleMainCheckboxes}
                  toggleCheckboxes={toggleCheckboxes}
                  registerCheckbox={registerCheckbox}
                />
              </Collapse>
            </List>
          );
        })
      }
    </div>
  );
};

BalanceTipo.propTypes = {
  parentName: PropTypes.string.isRequired,
  tipos: PropTypes.array.isRequired,

  checkboxes: PropTypes.object.isRequired,
  _checkboxes: PropTypes.object.isRequired,
  toggleMainCheckboxes: PropTypes.func.isRequired,
  toggleCheckboxes: PropTypes.func.isRequired,
  registerCheckbox: PropTypes.func.isRequired,
};

export default BalanceTipo;
