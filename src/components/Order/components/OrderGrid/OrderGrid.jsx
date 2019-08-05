import React from 'react';
import PropTypes from 'prop-types';
import { isMobile, isChromium, isMobileSafari } from 'react-device-detect';

/* Material */
import { Grid, IconButton } from '@material-ui/core';
import { Refresh } from '@material-ui/icons';

/* Swippable */
import {
  PullToRefresh,
  ReleaseContent,
  RefreshContent,
  PullDownContent,
} from 'react-js-pull-to-refresh';

/* Components */
import OrderCard from './OrderCard';

/* Proptypes */
import orderProps from '../../../../propTypes/orderProps';

import EmptyElement from '../../../EmptyElement';

const OrderGrid = ({
  order,
  dispatchSelectOrder,
  dispatchClearCart,
  cart,
  dispatchFetchAllOrders,
}) => {
  const { orderSelected } = cart;
  return (
    <div className="order_grid_container d-flex justify-content-center align-items-center">
      {!(isChromium || isMobileSafari) ? (
        <>
          <PullToRefresh
            onRefresh={() => dispatchFetchAllOrders()}
            pullDownContent={<PullDownContent />}
            releaseContent={<ReleaseContent />}
            refreshContent={<RefreshContent />}
            pullDownThreshold={75}
            triggerHeight={50}
            backgroundColor="white"
            startInvisible
          >
            <div className=" w-100 d-flex align-items-center justify-content-center">
              <IconButton onClick={() => dispatchFetchAllOrders()}>
                <Refresh />
              </IconButton>
            </div>
            <div className={isMobile ? 'w-100' : 'response-grid w-100'}>
              {order.paginatedOrders.length > 0 ? (
                <Grid
                  className={
                    isMobile
                      ? 'grid_container justify-content-center'
                      : 'grid_container my-4 justify-content-center'
                  }
                  container
                  spacing={8}
                >
                  {order.paginatedOrders.map(_order => (
                    <OrderCard
                      key={`OrderGrid-${_order.crmid}`}
                      order={_order}
                      orderSelected={orderSelected}
                      dispatchClearCart={dispatchClearCart}
                      handleOnClick={dispatchSelectOrder}
                      selectedClass={
                        _order.crmid === orderSelected.crmid
                        || order.paginatedOrders.length === 1
                          ? 'flip-card-selected'
                          : ''
                      }
                    />
                  ))}
                </Grid>
              ) : (
                <EmptyElement />
              )}
            </div>
          </PullToRefresh>
        </>
      ) : (
        <div className={isMobile ? 'w-100' : 'response-grid w-100'}>
          {order.paginatedOrders.length > 0 ? (
            <Grid
              className={
                isMobile
                  ? 'grid_container justify-content-center'
                  : 'grid_container my-4 justify-content-center'
              }
              container
              spacing={8}
            >
              {order.paginatedOrders.map(_order => (
                <OrderCard
                  key={`OrderGrid-${_order.crmid}`}
                  order={_order}
                  orderSelected={orderSelected}
                  dispatchClearCart={dispatchClearCart}
                  handleOnClick={dispatchSelectOrder}
                  selectedClass={
                    _order.crmid === orderSelected.crmid
                    || order.paginatedOrders.length === 1
                      ? 'flip-card-selected'
                      : ''
                  }
                />
              ))}
            </Grid>
          ) : (
            <EmptyElement />
          )}
        </div>
      )}
    </div>
  );
};

OrderGrid.propTypes = {
  cart: PropTypes.object.isRequired,
  order: orderProps.isRequired,
  dispatchSelectOrder: PropTypes.func.isRequired,
  dispatchClearCart: PropTypes.func.isRequired,
  dispatchFetchAllOrders: PropTypes.func.isRequired,
};

export default OrderGrid;
