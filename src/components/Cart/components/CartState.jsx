import React from 'react';
import PropTypes from 'prop-types';

import CartStateOrder from './CartStateOrder';
import CartStateControls from './CartStateControls';

const CartState = ({
  orderNo,
  orderId,
  customer,
  orderStatuses,
  currentOrderStatus,
  changeCurrentOrderStatus,
  shoulrRefoundMoney,
  shoulrRefoundProducts,
  timbrar,
  openRefundModal,
  openCheckOutRefunModal,
  saveSell,
  posType,
  sendEmail,
  sendEmailIsLoading,
  sendEmailIsOpen,
  openEmailModal,
  closeMailModal,
}) => (
  <div className="cart-state">
    <CartStateOrder
      orderNo={orderNo}
      orderStatuses={orderStatuses}
      currentOrderStatus={currentOrderStatus}
      changeCurrentOrderStatus={changeCurrentOrderStatus}
      isCotizacion={posType === 'Cotizaciones'}
    />
    <CartStateControls
      customer={customer}
      orderNo={orderNo}
      orderId={orderId}
      shoulrRefoundMoney={shoulrRefoundMoney}
      shoulrRefoundProducts={shoulrRefoundProducts}
      timbrar={timbrar}
      openRefundModal={openRefundModal}
      openCheckOutRefunModal={openCheckOutRefunModal}
      isOrder={posType === 'Historico' && Boolean(orderNo)}
      isCotizacion={posType === 'Cotizaciones'}
      isProducts={posType === 'Vender'}
      saveSell={saveSell}
      sendEmail={sendEmail}
      sendEmailIsLoading={sendEmailIsLoading}
      sendEmailIsOpen={sendEmailIsOpen}
      openEmailModal={openEmailModal}
      closeMailModal={closeMailModal}
      posType={posType}
    />
  </div>
);

CartState.propTypes = {
  orderNo: PropTypes.string.isRequired,
  orderId: PropTypes.string.isRequired,
  orderStatuses: PropTypes.array.isRequired,
  currentOrderStatus: PropTypes.string.isRequired,
  shoulrRefoundMoney: PropTypes.bool.isRequired,
  shoulrRefoundProducts: PropTypes.bool.isRequired,
  changeCurrentOrderStatus: PropTypes.func.isRequired,
  timbrar: PropTypes.func.isRequired,
  openRefundModal: PropTypes.func.isRequired,
  openCheckOutRefunModal: PropTypes.func.isRequired,
  saveSell: PropTypes.func.isRequired,
  posType: PropTypes.string.isRequired,
  sendEmail: PropTypes.func.isRequired,
  sendEmailIsLoading: PropTypes.bool.isRequired,
  sendEmailIsOpen: PropTypes.bool.isRequired,
  openEmailModal: PropTypes.func.isRequired,
  closeMailModal: PropTypes.func.isRequired,
  customer: PropTypes.object.isRequired,
};

export default CartState;
