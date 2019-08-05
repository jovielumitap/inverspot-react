import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  IconButton,
  Menu,
  MenuItem,
} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ReplayIcon from '@material-ui/icons/Replay';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ShareIcon from '@material-ui/icons/Share';
import PrintIcon from '@material-ui/icons/Print';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartStateShare from './CartStateShare';

const CartStateControls = ({
  customer,
  posType,
  orderNo,
  orderId,
  shoulrRefoundMoney,
  shoulrRefoundProducts,
  timbrar,
  openRefundModal,
  openCheckOutRefunModal,
  isOrder,
  saveSell,
  isCotizacion,
  isProducts,
  sendEmail,
  sendEmailIsLoading,
  sendEmailIsOpen,
  openEmailModal,
  closeMailModal,
}) => {
  const [anchorRefunMenu, setRefunMenu] = useState(null);
  const [anchorOptionMenu, setOptionMenu] = useState(null);
  const anchorRefunMenuIsOpen = Boolean(anchorRefunMenu);
  const anchorOptionMenuIsOpen = Boolean(anchorOptionMenu);
  return (
    <div>
      {
        (isProducts) && (
          <IconButton onClick={saveSell}>
            <SaveIcon />
          </IconButton>
        )
      }
      {
        isOrder && (
          <IconButton
            aria-label="Timbrar"
            onClick={timbrar}
          >
            <NotificationsIcon />
          </IconButton>
        )
      }
      {
        isOrder && (shoulrRefoundMoney || shoulrRefoundProducts) && (
          <IconButton
            aria-label="More"
            aria-owns={anchorRefunMenuIsOpen ? 'refun-menu' : undefined}
            aria-haspopup="true"
            onClick={(event) => {
              const { currentTarget } = event;
              setRefunMenu(currentTarget);
            }}
          >
            <ReplayIcon />
          </IconButton>
        )
      }
      {
        !isProducts && orderNo && (
          <IconButton
            aria-label="More"
            aria-owns={anchorRefunMenuIsOpen ? 'option-menu' : undefined}
            aria-haspopup="true"
            onClick={(event) => {
              const { currentTarget } = event;
              setOptionMenu(currentTarget);
            }}
          >
            <MoreVertIcon />
          </IconButton>
        )
      }
      {
        (shoulrRefoundMoney || shoulrRefoundProducts) && (
          <Menu
            id="refun-menu"
            anchorEl={anchorRefunMenu}
            open={anchorRefunMenuIsOpen}
            onClose={() => {
              setRefunMenu(null);
            }}
          >
            {
              shoulrRefoundMoney && (
                <MenuItem
                  onClick={() => {
                    setRefunMenu(null);
                    openCheckOutRefunModal();
                  }}
                >
                  Dinero
                </MenuItem>
              )
            }
            {
              shoulrRefoundProducts && (
                <MenuItem
                  onClick={() => {
                    setRefunMenu(null);
                    openRefundModal();
                  }}
                >
                  Productos
                </MenuItem>
              )
            }
          </Menu>
        )
      }
      <Menu
        id="option-menu"
        anchorEl={anchorOptionMenu}
        open={anchorOptionMenuIsOpen}
        onClose={() => {
          setOptionMenu(null);
        }}
      >
        <MenuItem>
          <IconButton
            onClick={sendEmailIsOpen === false ? () => {
              openEmailModal();
              setOptionMenu(null);
            } : () => {}}
          >
            <ShareIcon />
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton>
            <PrintIcon />
          </IconButton>
        </MenuItem>
        <MenuItem>
          <IconButton>
            <FontAwesomeIcon icon="file-invoice" />
          </IconButton>
        </MenuItem>
      </Menu>
      <CartStateShare
        orderNo={orderNo}
        posType={posType}
        customer={customer}
        isOpen={sendEmailIsOpen}
        isLoading={sendEmailIsLoading}
        onClose={closeMailModal}
        onSave={(data) => {
          const newData = { ...data, crmid: orderId };
          sendEmail(newData);
        }}
      />
    </div>
  );
};

CartStateControls.propTypes = {
  customer: PropTypes.object.isRequired,
  posType: PropTypes.string.isRequired,
  orderNo: PropTypes.string.isRequired,
  orderId: PropTypes.string.isRequired,
  shoulrRefoundMoney: PropTypes.bool.isRequired,
  shoulrRefoundProducts: PropTypes.bool.isRequired,
  timbrar: PropTypes.func.isRequired,
  openRefundModal: PropTypes.func.isRequired,
  openCheckOutRefunModal: PropTypes.func.isRequired,
  isOrder: PropTypes.bool.isRequired,
  saveSell: PropTypes.func.isRequired,
  isCotizacion: PropTypes.bool.isRequired,
  isProducts: PropTypes.bool.isRequired,
  sendEmail: PropTypes.func.isRequired,
  sendEmailIsLoading: PropTypes.bool.isRequired,
  sendEmailIsOpen: PropTypes.bool.isRequired,
  openEmailModal: PropTypes.func.isRequired,
  closeMailModal: PropTypes.func.isRequired,
};

export default CartStateControls;
