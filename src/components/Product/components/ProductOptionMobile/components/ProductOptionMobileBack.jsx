import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Add, Check } from '@material-ui/icons';
import productOptionProps from '../../../../../propTypes/productOptionProps';

const ProductOptionMobileBack = ({
  options,
  crmid,
  addElement,
  removeElement,
  changeQty,
}) => (
  <div className="w-100 h-100 os-y">
    <div className="w-100">
      <h4 style={{ textAlign: 'center' }}>Selecciona un Tipo</h4>
      <div className="w-100 h-auto d-flex flex-column optionsContainerRes">
        {options.map(x => (
          <div
            role="button"
            key={`option_${x.crmid}`}
            className="d-flex justify-content-around align-items-center"
            style={{ padding: '0.8em 0.2em' }}
          >
            <Button
              onClick={() => {
                if (!crmid.includes(x)) {
                  addElement(x);
                }
              }}
              style={{ fontSize: '1.4em', width: '100%' }}
              variant={crmid.includes(x) ? 'contained' : 'outlined'}
              color="primary"
              aria-label="Add"
            >
              { crmid.includes(x) ? <Check onClick={() => { removeElement(x); }} fontSize="large" /> : <Add fontSize="large" /> }
              <div className="w-100 h-auto d-flex flex-column">
                <div className="__title">{x.opcion}</div>
                <div style={{ fontSize: '0.8em' }}>{`$ ${x.totalPrice}`}</div>
              </div>
              { crmid.includes(x)
                ? (
                  <div className="w-100 h-auto d-flex flex-column">
                    <div style={{ fontSize: '0.8em' }}>Cantidad</div>
                    <input
                      style={
                      {
                        textAlign: 'center',
                        border: 'none',
                        borderRadius: '0.8em',
                      }}
                      type="number"
                      data-id={x.crmid}
                      onChange={changeQty}
                      className="w-100"
                      value={x.quantity}
                      min="1"
                    />
                  </div>
                )
                : (
                  <div className="w-100 h-auto d-flex flex-column">
                    <div style={{ fontSize: '1.2em' }}>{x.qtyinstock}</div>
                    <div style={{ fontSize: '0.6em' }} className="__title">STOCK</div>
                  </div>
                )
              }
            </Button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

ProductOptionMobileBack.propTypes = {
  options: productOptionProps.isRequired,
  crmid: PropTypes.array.isRequired,
  addElement: PropTypes.func.isRequired,
  removeElement: PropTypes.func.isRequired,
  changeQty: PropTypes.func.isRequired,
};

export default ProductOptionMobileBack;
