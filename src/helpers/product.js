/* eslint camelcase: 0 */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

import { getItem } from './storage';
import { numberFormat, wordInString, paginate } from './tools';

const _normalizeOption = (_option, parentId, exist) => {
  const option = { ..._option };

  /* Temporal */
  const cartProductsById = getItem('cartProductsById');

  option.qtyinstock = numberFormat(option.qtyinstock);
  option.unit_price = numberFormat(option.unit_price);
  option.tax1 = numberFormat(option.tax1);
  option.tax2 = numberFormat(option.tax2);
  option.tax3 = numberFormat(option.tax3);
  option.tax4 = numberFormat(option.tax4);
  option.tax5 = numberFormat(option.tax5);
  option.tax6 = numberFormat(option.tax6);
  option.tax7 = numberFormat(option.tax7);
  option.weight = numberFormat(option.weight);

  /* Extra */
  const { unit_price, tax1 } = option;
  option.totalPrice = (unit_price * (1 + (tax1 / 100) || 0));
  option.totalPrice = numberFormat(option.totalPrice);
  option.parentId = parentId;
  option.sin_existencia = Boolean(exist);

  const { crmid } = option;
  if (crmid in cartProductsById) {
    option.qtyinstock = cartProductsById[crmid].qtyinstock - cartProductsById[crmid].quantity;
  }

  return option;
};

const _normalizeProduct = (_product) => {
  const product = { ..._product };
  const noImage = `${process.env.PUBLIC_URL}/img/no_image.jpg`;
  product.unit_price = numberFormat(product.unit_price);
  product.image = product.images[0] || noImage;
  return product;
};

export const normalizeProducts = products => (
  new Promise((resolve) => {
    const productsById = { ...products };

    for (const productId in productsById) {
      let product = productsById[productId];
      product = _normalizeProduct(product);

      const productOptionsById = product.Products;
      const { crmid, sin_existencia } = product;

      for (const optionId in productOptionsById) {
        let option = productOptionsById[optionId];
        option = _normalizeOption(option, crmid, sin_existencia);
        productOptionsById[optionId] = option;
      }

      product.Products = productOptionsById;
      productsById[productId] = product;
    }

    resolve(productsById);
  })
);

export const makeProductsArray = productsById => (
  Object.keys(productsById)
    .map((productId) => {
      const product = { ...productsById[productId] };
      product.Products = Object.keys(product.Products).map(optionId => product.Products[optionId]);
      return product;
    })
);

export const haveStock = (product, authUser) => {
  const { qtyinstock, sin_existencia } = product;
  return (authUser.user.config.pos_sininv || sin_existencia) || qtyinstock > 0;
};

export const findProducts = (products, word) => {
  const foundProducts = products.filter(product => (
    wordInString(word, product.nombre)
    || wordInString(word, product.categorias)
    || wordInString(word, product.marca)
  ));
  return foundProducts;
};

export const paginatedProducts = (productsByArray, totalItemsForPage, index = 0) => {
  const _paginatedProducts = paginate(productsByArray, totalItemsForPage, index);
  const { page, indexPage, totalPages } = _paginatedProducts;
  const products = page;
  const actualPage = indexPage + 1;
  return {
    products,
    actualPage,
    totalPages,
  };
};

export const subtractStock = (products, productsById, cartProductsById = {}) => {
  const subtractProducts = products.map((_option) => {
    const option = { ..._option };
    const { parentId, crmid } = option;

    if (crmid in cartProductsById) {
      option.qtyinstock = numberFormat(cartProductsById[crmid].qtyinstock) - numberFormat(cartProductsById[crmid].quantity);
    }

    else if (parentId in productsById && crmid in productsById[parentId].Products) {
      option.qtyinstock = numberFormat(productsById[parentId].Products[crmid].qtyinstock);
    }

    return option;
  });

  return subtractProducts;
};

export const mappingOptions = ({ keyCode, sRow, sCol, column, row, prevState }) => {
  switch (keyCode) {
    case 39:
      if (sCol !== 3 && sRow !== row) {
        return { sCol: prevState.sCol + 1 };
      }
      if (sCol !== column && sRow === row) {
        return { sCol: prevState.sCol + 1 };
      }
      break;
    case 37:
      if (sCol !== 1) {
        return { sCol: prevState.sCol - 1 };
      }
      break;
    case 38:
      if (sRow !== 1) {
        return { sRow: prevState.sRow - 1 };
      }
      break;
    case 40:
      if (sRow !== row) {
        return { sRow: prevState.sRow + 1 };
      }
      if ((sCol === 3 || sCol === 2) && sRow === (row - 1)) {
        return { sCol: column, sRow: row };
      }
      break;
    default:
      return { sCol: 1, sRow: 1 };
  }
}

export default {
  normalizeProducts,
  makeProductsArray,
  haveStock,
  findProducts,
  paginatedProducts,
  subtractStock,
  mappingOptions,
};

/*
  const productsByArray = Object.keys(productsById).map((productId) => {
    let product = productsById[productId];
    product = _normalizeProduct(product);

    const productOptionsById = product.Products;
    const { crmid, sin_existencia } = product;
    product.Products = Object.keys(productOptionsById).map((optionId) => {
      let option = productOptionsById[optionId];
      option = _normalizeOption(option, crmid, sin_existencia);
      return option;
    });

    return product;
  });
*/
