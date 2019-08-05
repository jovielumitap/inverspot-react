import React from 'react';
import PropTypes from 'prop-types';
import productOptionProps from '../../../../propTypes/productOptionProps';

import ProductOptionMobileBack from './components/ProductOptionMobileBack';

const ProductOptionMobile = ({
  options,
  crmid,
  addElement,
  removeElement,
  changeQty,
}) => (
  <ProductOptionMobileBack
    options={options}
    crmid={crmid}
    addElement={addElement}
    removeElement={removeElement}
    changeQty={changeQty}
  />
);

ProductOptionMobile.propTypes = {
  options: productOptionProps.isRequired,
  crmid: PropTypes.array.isRequired,
  addElement: PropTypes.func.isRequired,
  removeElement: PropTypes.func.isRequired,
  changeQty: PropTypes.func.isRequired,
};

export default ProductOptionMobile;
