import React from 'react';
import PropTypes from 'prop-types';

import Paper from '@material-ui/core/Paper';

import tabsProps from '../../propTypes/tabsProps';
import loadsProps from '../../propTypes/loadsProps';

import ProductGrid from './components/ProductGrid';
import ProductTable from './components/ProductTable';
import ProductPagination from './components/ProductPagination';
import LoadComponent from '../Load/LoadComponent';
import ProductOptions from './components/ProductOptions';

const Product = ({
  tabs,
  loads,
  product,
  product: { subProducts },
  authUser,
  modals,
  addProducts,
  getProductsByPage,
  toggleModal,
  handleOnClick,
  dispatchFetchAllProducts,
}) => (
  <>
    {tabs.posDisplayTab === 'grid' && (
      <Paper className="grid__container">
        <ProductGrid
          product={product}
          authUser={authUser}
          addProducts={addProducts}
          handleOnClick={handleOnClick}
          dispatchFetchAllProducts={dispatchFetchAllProducts}
        />
        <ProductPagination
          product={product}
          getProductsByPage={getProductsByPage}
        />
      </Paper>
    )}
    {tabs.posDisplayTab === 'list' && (
      <Paper className="table__container">
        <ProductTable
          modals={modals}
          authUser={authUser}
          product={product}
          addProducts={addProducts}
          handleOnClick={handleOnClick}
        />
      </Paper>
    )}
    {loads.productIsLoading && <LoadComponent />}
    <ProductOptions
      authUser={authUser}
      modals={modals}
      toggleModal={toggleModal}
      addProducts={addProducts}
      options={subProducts}
      loads={loads}
    />
  </>
);

Product.propTypes = {
  product: PropTypes.object.isRequired,
  tabs: tabsProps.isRequired,
  loads: loadsProps.isRequired,
  authUser: PropTypes.object.isRequired,
  modals: PropTypes.object.isRequired,
  addProducts: PropTypes.func.isRequired,
  getProductsByPage: PropTypes.func.isRequired,
  toggleModal: PropTypes.func.isRequired,
  
  /* news */
  handleOnClick: PropTypes.func.isRequired,
  dispatchFetchAllProducts: PropTypes.func.isRequired,
};

export default Product;
