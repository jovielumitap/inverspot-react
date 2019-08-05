/* eslint camelcase: 0 */
/* eslint-disable no-underscore-dangle */

import {
  GET_PRODUCTS_BY_PAGE,
  FILTER_PRODUCTS,
  ADD_PRODUCTS,
  UPDATE_PRODUCTS_WITH_CART,
  GET_SUBPRODUCTS_LIST,
  SET_MULTIFILTER_PRODUCT,
  REMOVE_MULTIFILTER_PRODUCT,
  CLEAR_MULTIFILTER_PRODUCT,
} from '../actions/productActions';

import { productHelper } from '../../helpers';
import { numberFormat } from '../../helpers/tools';

const totalItemsForPage = 50;
const defaultState = () => ({
  actualPage: 1,
  totalPages: 1,
  products: [],
  productsByArray: [],
  productsById: {},
  subProducts: [],
  filters: [],
  categories: [{
    title: 'Todos',
    word: 'general',
    cats: [
      { title: 'ID', column: 'crmid', type: 'general' },
      { title: 'Categorias', column: 'categorias', type: 'general' },
      { title: 'Nombre', column: 'nombre', type: 'general' },
      { title: 'Marca', column: 'marca', type: 'general' },
      { title: 'Precio Unitario', column: 'unit_price', type: 'general' },
    ],
  }],
});

const getProductsByPage = (state, page = 0) => {
  const { productsByArray } = state;
  const index = page > 0 ? page - 1 : page;
  const paginatedProducts = productHelper.paginatedProducts(productsByArray, totalItemsForPage, index);
  return { ...state, ...paginatedProducts };
};

const filterProduct = (state, word) => {
  const { productsByArray } = state;
  const products = word.length < 3 ? productsByArray : productHelper.findProducts(productsByArray, word);
  const paginatedProducts = productHelper.paginatedProducts(products, totalItemsForPage, 0);
  return { ...state, ...paginatedProducts };
};

const addProducts = (state, productsById) => {
  const productsByArray = productHelper.makeProductsArray(productsById);
  const paginatedProducts = productHelper.paginatedProducts(productsByArray, totalItemsForPage, 0);
  return {
    ...state,
    ...paginatedProducts,
    productsById,
    productsByArray,
  };
};

const subproductsList = (state, subProducts) => ({
  ...state,
  subProducts,
});

/* Refactorizar error mio... e.e */
const updateProductsWithCart = (state, cartProductsById) => {
  const { products, productsById, productsByArray } = state;

  const updatedProducts = products.map((_product) => {
    const product = { ..._product };
    product.Products = productHelper.subtractStock(product.Products, productsById, cartProductsById);
    return product;
  });

  const updateAllProducts = productsByArray.map((_product) => {
    const product = { ..._product };
    const Products = [...product.Products];

    product.Products = Products.map((_option) => {
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

    return product;
  });

  return { ...state, products: updatedProducts, productsByArray: updateAllProducts };
};

const setFilter = (state, filters, element) => {
  const array = filters.filter(x => x.type === element.type);
  if (array.length === 0) {
    filters.push(element);
  } else {
    filters.forEach((x, index) => {
      if (x.type === element.type) { filters[index] = element; }
    });
  }
  return { ...state, filters };
};

const removeFilter = (state, filters, word) => {
  const array = filters.filter(x => x.type === word);
  if (array.length !== 0) {
    filters.forEach((filter, i) => {
      if (filter.type === word) filters.splice(i, 1);
    });
  }
  return { ...state, filters };
};

const clearFilter = (state) => {
  const filters = [];
  return { ...state, filters };
};

export default (state = defaultState(), action) => {
  const { type } = action;
  switch (type) {
    case FILTER_PRODUCTS:
      return filterProduct(state, action.word);
    case GET_PRODUCTS_BY_PAGE:
      return getProductsByPage(state, action.page);
    case ADD_PRODUCTS:
      return addProducts(state, action.products);
    case UPDATE_PRODUCTS_WITH_CART:
      return updateProductsWithCart(state, action.cartProductsById);
    case GET_SUBPRODUCTS_LIST:
      return subproductsList(state, action.products);
    case SET_MULTIFILTER_PRODUCT:
      return setFilter(state, action.filters, action.item);
    case REMOVE_MULTIFILTER_PRODUCT:
      return removeFilter(state, action.filters, action.word);
    case CLEAR_MULTIFILTER_PRODUCT:
      return clearFilter(state);
    default:
      return state;
  }
};
