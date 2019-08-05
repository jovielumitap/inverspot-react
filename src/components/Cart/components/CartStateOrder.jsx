import React from 'react';
import PropTypes from 'prop-types';

import {
  Menu,
  MenuItem,
  Button,
  // Select,
  Collapse,
} from '@material-ui/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartStateOrder = ({
  orderNo,
  orderStatuses,
  currentOrderStatus,
  changeCurrentOrderStatus,
  isCotizacion,
}) => {
  // Init State
  const [anchorStatusMenu, setStatusMenu] = React.useState(null);
  const anchorStatusMenuIsOpen = Boolean(anchorStatusMenu);

  const renderStatus = () => {
    const status = orderStatuses.find(estatus => estatus.id === currentOrderStatus);
    return status.value;
  };

  return (
    <div className="cart-state__order w-90 d-flex justify-content-start">
      <FontAwesomeIcon icon="file-invoice" />
      <Collapse in={orderNo}>
        <span>{orderNo}</span>
      </Collapse>
      <Collapse in={!isCotizacion}>
        <>
          <Button
            className="font-size-10"
            aria-haspopup="true"
            onClick={(event) => {
              const { currentTarget } = event;
              setStatusMenu(currentTarget);
            }}
          >
            {renderStatus()}
          </Button>
          <Menu
            id="statusControl"
            anchorEl={anchorStatusMenu}
            open={anchorStatusMenuIsOpen}
            onClose={() => {
              setStatusMenu(null);
            }}
          >
            {orderStatuses.map(status => (
              <MenuItem
                key={`key_${status.value}`}
                dense
                selected={status.id === currentOrderStatus}
                onClick={async () => {
                  await changeCurrentOrderStatus(status.id);
                  await setStatusMenu(null);
                }}
              >
                {status.value}
              </MenuItem>
            ))}
          </Menu>
        </>
      </Collapse>
      {/* {
      !isCotizacion && (
        <Select
          native
          value={currentOrderStatus}
          onChange={(event) => {
            const { value } = event.target;
            changeCurrentOrderStatus(value);
          }}
          inputProps={{
            name: 'order-status',
            id: 'order-status',
          }}
        >
          {
            orderStatuses.map(status => (
              <option
                key={`CartStateOrder-${status.id}`}
                value={status.id}
              >
                {status.value}
              </option>
            ))
          }
        </Select>
      )
    } */}
    </div>
  );
};

CartStateOrder.propTypes = {
  orderNo: PropTypes.string.isRequired,
  orderStatuses: PropTypes.array.isRequired,
  currentOrderStatus: PropTypes.string.isRequired,
  changeCurrentOrderStatus: PropTypes.func.isRequired,
  isCotizacion: PropTypes.bool.isRequired,
};

export default CartStateOrder;
