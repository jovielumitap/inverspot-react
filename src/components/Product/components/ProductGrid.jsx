/* eslint-disable object-curly-newline */

import React from 'react';
import PropTypes from 'prop-types';
import { isMobile, isChromium, isMobileSafari } from 'react-device-detect';

import { Refresh } from '@material-ui/icons';

import {
  PullToRefresh,
  ReleaseContent,
  RefreshContent,
  PullDownContent,
} from 'react-js-pull-to-refresh';

import Grid from '@material-ui/core/Grid';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import productProps from '../../../propTypes/productProps';
import authUserProps from '../../../propTypes/authUserProps';
import EmptyElement from '../../EmptyElement';

import { haveStock } from '../../../helpers/product';

const ProductGrid = ({
  authUser,
  product,
  addProducts,
  handleOnClick,
  dispatchFetchAllProducts,
}) => (
  <div className="product-grid">
    {!(isChromium || isMobileSafari) ? (
      <>
        <PullToRefresh
          onRefresh={() => dispatchFetchAllProducts()}
          pullDownContent={<PullDownContent />}
          releaseContent={<ReleaseContent />}
          refreshContent={<RefreshContent />}
          pullDownThreshold={75}
          triggerHeight={50}
          backgroundColor="white"
          startInvisible
        >
          <div className=" w-100 d-flex align-items-center justify-content-center">
            <IconButton onClick={() => dispatchFetchAllProducts()}>
              <Refresh />
            </IconButton>
          </div>
          <Grid
            className={!isMobile ? 'w-100 h-100 grid-overflow' : 'w-100 h-100'}
            container
            spacing={8}
          >
            {product.products.length > 0 ? (
              product.products.map(_product => (
                <Grid key={`ProductGrid-${_product.crmid}`} item sm={3} xs={6}>
                  <div
                    className="product-grid-item"
                    title={_product.nombre}
                    style={{ backgroundImage: `url(${_product.image})` }}
                  >
                    <div className="product-grid-item__info-container">
                      <div className="product-grid-item__name">
                        {_product.nombre}
                      </div>
                      <div className="product-grid-item__price">
                        {`$${_product.unit_price}`}
                      </div>
                    </div>
                    {_product.Products.length === 1 ? (
                      <button
                        type="button"
                        className="catalog__addToCart-button"
                        onClick={
                          haveStock(_product.Products[0], authUser)
                            ? (event) => { addProducts(event.target); }
                            : () => {}
                        }
                        data-parentid={_product.Products[0].parentId}
                        data-crmid={_product.Products[0].crmid}
                        disabled={!haveStock(_product.Products[0], authUser)}
                      />
                    ) : (
                      <>
                        <button
                          type="button"
                          className="catalog__addToCart-button"
                          onClick={() => {
                            handleOnClick('options', _product.Products);
                          }}
                        />
                        <FontAwesomeIcon
                          className="product-grid-item__options"
                          icon="th-large"
                        />
                      </>
                    )}
                  </div>
                </Grid>
              ))
            ) : (
              <EmptyElement />
            )}
          </Grid>
        </PullToRefresh>
      </>
    ) : (
      <Grid
        className={!isMobile ? 'w-100 h-100 grid-overflow' : 'w-100 h-100'}
        container
        spacing={8}
      >
        {product.products.length > 0 ? (
          product.products.map(_product => (
            <Grid key={`ProductGrid-${_product.crmid}`} item sm={3} xs={6}>
              <div
                className="product-grid-item"
                title={_product.nombre}
                style={{ backgroundImage: `url(${_product.image})` }}
              >
                <div className="product-grid-item__info-container">
                  <div className="product-grid-item__name">
                    {_product.nombre}
                  </div>
                  <div className="product-grid-item__price">
                    {`$${_product.unit_price}`}
                  </div>
                </div>
                {_product.Products.length === 1 ? (
                  <button
                    type="button"
                    className="catalog__addToCart-button"
                    onClick={
                      haveStock(_product.Products[0], authUser)
                        ? (event) => { addProducts(event.target); }
                        : () => {}
                    }
                    data-parentid={_product.Products[0].parentId}
                    data-crmid={_product.Products[0].crmid}
                    disabled={!haveStock(_product.Products[0], authUser)}
                  />
                ) : (
                  <>
                    <button
                      type="button"
                      className="catalog__addToCart-button"
                      onClick={() => {
                        handleOnClick('options', _product.Products);
                      }}
                    />
                    <FontAwesomeIcon
                      className="product-grid-item__options"
                      icon="th-large"
                    />
                  </>
                )}
              </div>
            </Grid>
          ))
        ) : (
          <EmptyElement />
        )}
      </Grid>
    )}
  </div>
);

ProductGrid.propTypes = {
  product: productProps.isRequired,
  authUser: authUserProps.isRequired,
  addProducts: PropTypes.func.isRequired,
  handleOnClick: PropTypes.func.isRequired,
  dispatchFetchAllProducts: PropTypes.func.isRequired,
};

export default ProductGrid;
