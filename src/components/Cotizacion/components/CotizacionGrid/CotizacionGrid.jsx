import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';

/* Material */
import { Grid } from '@material-ui/core';

/* Components */
import CotizacionCard from './CotizacionCard';


import EmptyElement from '../../../EmptyElement';

const CotizacionGrid = ({
  cotizacion,
  dispatchSelectCotizacion,
  dispatchClearCart,
  cart,
}) => {
  const { orderSelected } = cart;
  return (
    <div className="order_grid_container d-flex justify-content-center align-items-center">
      <div className={isMobile ? 'w-100' : 'response-grid w-100'}>
        {
          cotizacion.paginatedOrders.length > 0
            ? (
              <Grid
                className={isMobile ? 'grid_container justify-content-center' : 'grid_container my-4 justify-content-center'}
                container
                spacing={8}
              >
                {
                  cotizacion.paginatedOrders.map(_cotizacion => (
                    <CotizacionCard
                      key={`CotizacionGrid-${_cotizacion.crmid}`}
                      order={_cotizacion}
                      orderSelected={orderSelected}
                      dispatchClearCart={dispatchClearCart}
                      handleOnClick={dispatchSelectCotizacion}
                      selectedClass={(_cotizacion.crmid === orderSelected.crmid || cotizacion.paginatedOrders.length === 1) ? 'flip-card-selected' : ''}
                    />
                  ))
                }
              </Grid>
            )
            : (
              <EmptyElement />
            )
        }
      </div>
    </div>
  );
};

CotizacionGrid.propTypes = {
  cart: PropTypes.object.isRequired,
  cotizacion: PropTypes.object.isRequired,
  dispatchSelectCotizacion: PropTypes.func.isRequired,
  dispatchClearCart: PropTypes.func.isRequired,
};

export default CotizacionGrid;
