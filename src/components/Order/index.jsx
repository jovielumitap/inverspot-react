import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

import tabsProps from '../../propTypes/tabsProps';
import loadsProps from '../../propTypes/loadsProps';

import OrderTable from './components/OrderTable';
import OrderGrid from './components/OrderGrid/OrderGrid';
import OrderPaginator from './components/OrderGrid/OrderPaginator';
import LoadComponent from '../Load/LoadComponent';

const Order = ({
  order,
  cart,
  tabs,
  loads,
  dispatchSelectOrder,
  dispatchClearCart,
  dispatchFetchAllOrders,
}) => (
  <>
    {
      tabs.posDisplayTab === 'grid' && (
        <Paper className="grid__container">
          <OrderGrid
            order={order}
            cart={cart}
            dispatchSelectOrder={dispatchSelectOrder}
            dispatchClearCart={dispatchClearCart}
            dispatchFetchAllOrders={dispatchFetchAllOrders}
          />
          <OrderPaginator />
        </Paper>
      )
    }
    {
      tabs.posDisplayTab === 'list' && (
        <Paper className="table__container">
          <OrderTable
            order={order}
            dispatchSelectOrder={dispatchSelectOrder}
          />
        </Paper>
      )
    }
    { loads.orderIsLoading && <LoadComponent /> }
  </>
);

Order.propTypes = {
  tabs: tabsProps.isRequired,
  loads: loadsProps.isRequired,
  order: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired,
  dispatchSelectOrder: PropTypes.func.isRequired,
  dispatchClearCart: PropTypes.func.isRequired,
  dispatchFetchAllOrders: PropTypes.func.isRequired,
};

export default Order;
