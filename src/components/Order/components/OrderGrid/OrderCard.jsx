/* eslint-disable camelcase */

import React from 'react';
import { isMobile } from 'react-device-detect';
import PropTypes from 'prop-types';
import {
  FiberManualRecord,
  Check,
  Close,
  WatchLater,
  Forward,
} from '@material-ui/icons';
import { Button, Fab } from '@material-ui/core';

/* Tools */
import { formatMoney } from '../../../../helpers/tools';

/* Proptypes */
import orderProps from '../../../../propTypes/orderProps';

const OrderCard = ({
  order,
  handleOnClick,
  selectedClass = '',
  orderSelected,
  dispatchClearCart,
}) => {
  const {
    crmid,
    sostatus,
    hdnGrandTotal,
    estado_mda,
    estado_fde,
    createdtime,
    salesorder_no,
  } = order;

  const renderSOStatusIcon = (desc) => {
    let classInsert = 'd-flex justify-content-center align-items-center';
    let iconSetted = <div />;
    switch (sostatus) {
      case 'Approved':
        classInsert = `${classInsert} icon icon__sos__auto`;
        iconSetted = <Check />;
        break;
      case 'Cancelled':
        classInsert = `${classInsert} icon icon__sos__canc`;
        iconSetted = <Close />;
        break;
      default:
        classInsert = `${classInsert} icon icon__sos__crea`;
        iconSetted = <FiberManualRecord />;
        break;
    }
    if (desc) {
      return (
        <div className={classInsert}>
          {iconSetted}
        </div>
      );
    }
    return (
      <div className="icon_desc_container">
        <div className={classInsert}>
          {iconSetted}
        </div>
        <div className="icon_desc_text">
          <div className="icon_desc_text_title">Estado:</div>
          <div className="icon_desc_text_value">{sostatus}</div>
        </div>
      </div>
    );
  };

  const renderMovIcon = (mda, desc) => {
    let classInsert = 'd-flex justify-content-center align-items-center';
    let iconSetted = <div />;
    let estado = (mda ? (estado_mda) : (estado_fde));
    switch (estado) {
      case 'Entregado':
      case 'Cobrado':
        classInsert = `${classInsert} icon icon__mov__succ`;
        iconSetted = <Check />;
        break;
      case 'Parcialmente Entregado':
      case 'Parcialmente Cobrado':
        classInsert = `${classInsert} icon icon__mov__parc`;
        estado = mda ? 'Parc. Entregado' : 'Parc. Cobrado';
        iconSetted = <WatchLater />;
        break;
      default:
        classInsert = `${classInsert} icon icon__mov__sine`;
        iconSetted = <FiberManualRecord />;
        break;
    }
    if (desc) {
      return (
        <div className={classInsert}>
          {iconSetted}
        </div>
      );
    }
    return (
      <div className="icon_desc_container">
        <div className={classInsert}>
          {iconSetted}
        </div>
        <div className="icon_desc_text">
          <div className="icon_desc_text_title">{mda ? 'Mov. de Almacén' : 'Flujo de Efectivo'}</div>
          <div className="icon_desc_text_value d-flex align-items-start">{estado}</div>
        </div>
      </div>
    );
  };

  const specDate = () => {
    const tradeDate = `${new Date(createdtime).getDay()}${new Date(createdtime).getDay()}`;
    const specifiDate = `${new Date().getDay()}${new Date().getDay()}`;
    if (tradeDate === specifiDate) {
      return `${new Date(createdtime).getHours()}:${new Date(createdtime).getMinutes()}`;
    }
    return createdtime;
  };

  return (
    <div
      role="button"
      className={`flip-card ${selectedClass}`}
    >
      <div className="flip-card-inner">
        <div className="order_card h-100 ">
          <section className="icons_section w-100 d-flex justify-content-around">
            {/* Render sos icon */}
            {renderSOStatusIcon(true)}
            {/* Render MDA Icon */}
            {renderMovIcon(true, true)}
            {/* Render FDE Icon */}
            {renderMovIcon(false, true)}
          </section>
          <section className="desc_section d-flex flex-column justify-content-center align-items-center">
            <div className="desc_section__id">{salesorder_no}</div>
            <div className="desc_section__total">
              {' '}
              {`$  ${formatMoney(hdnGrandTotal)}`}
              {' '}
            </div>
            <div className="desc_section__created">{specDate()}</div>
          </section>
          <section className="button_section d-flex justify-content-center align-items-center">
            <Button
              className={isMobile ? 'w-100' : ''}
              variant="outlined"
              data-crmid={crmid}
              onClick={(event) => {
                if (orderSelected.crmid !== crmid) {
                  handleOnClick(event.currentTarget.dataset.crmid);
                } else {
                  dispatchClearCart();
                }
              }}
            >
              {'Detalles'}
            </Button>
          </section>
        </div>
        <div className="order_card_back">
          <section className="desc_section">
            <div className="desc_section__header">
              <div className="desc_section__id">{salesorder_no}</div>
              <div className="desc_section__total">
                {' '}
                {`$  ${formatMoney(hdnGrandTotal)}`}
                {' '}
              </div>
            </div>
            <div className="desc_section__date">{specDate()}</div>
          </section>
          <section className="icons_desc_section d-flex flex-column">
            {/* Render SOS Desc icon container */}
            {renderSOStatusIcon(false)}
            {/* Render MDA Icon Desc */}
            {renderMovIcon(true, false)}
            {/* Render FDE Icon Desc */}
            {renderMovIcon(false, false)}
          </section>
          <section className="px-4 desc_button_section d-flex justify-content-around align-items-center">
            <Fab onClick={() => { dispatchClearCart(); }} size="small" aria-label="Close">
              <Close />
            </Fab>
            <Fab onClick={() => { handleOnClick(crmid); }} size="small" aria-label="right">
              <Forward />
            </Fab>
          </section>
        </div>
      </div>
    </div>
  );
};

OrderCard.propTypes = {
  selectedClass: PropTypes.string.isRequired,
  order: orderProps.isRequired,
  orderSelected: orderProps.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  dispatchClearCart: PropTypes.func.isRequired,
};

export default OrderCard;
