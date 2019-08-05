import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

import tabsProps from '../../propTypes/tabsProps';
import loadsProps from '../../propTypes/loadsProps';

import CotizacionTable from './components/CotizacionTable';
import CotizacionGrid from './components/CotizacionGrid/CotizacionGrid';
import CotizacionPaginator from './components/CotizacionGrid/CotizacionPaginator';
import LoadComponent from '../Load/LoadComponent';

const Cotizacion = ({
  cotizacion,
  cart,
  tabs,
  loads,
  dispatchSelectCotizacion,
  dispatchClearCart,
}) => (
  <>
    {
      tabs.posDisplayTab === 'grid' && (
        <Paper className="grid__container">
          <CotizacionGrid
            cotizacion={cotizacion}
            cart={cart}
            dispatchSelectCotizacion={dispatchSelectCotizacion}
            dispatchClearCart={dispatchClearCart}
          />
          <CotizacionPaginator />
        </Paper>
      )
    }
    {
      tabs.posDisplayTab === 'list' && (
        <Paper className="table__container">
          <CotizacionTable
            cotizacion={cotizacion}
            dispatchSelectCotizacion={dispatchSelectCotizacion}
          />
        </Paper>
      )
    }
    { loads.cotizacionIsLoading && <LoadComponent /> }
  </>
);

Cotizacion.propTypes = {
  tabs: tabsProps.isRequired,
  loads: loadsProps.isRequired,
  cotizacion: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  dispatchSelectCotizacion: PropTypes.func.isRequired,
  dispatchClearCart: PropTypes.func.isRequired,
};

export default Cotizacion;
