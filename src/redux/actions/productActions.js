import ProductAPI from '../../api/ProductAPI';
import { normalizeProducts } from '../../helpers/product';
import { loading, loaded } from './loadActions';

export const ADD_PRODUCTS = 'ADD_PRODUCTS';
export const GET_PRODUCTS_BY_PAGE = 'GET_PRODUCTS_BY_PAGE';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const FETCH_ALL_PRODUCTS = 'FETCH_ALL_PRODUCTS';
export const UPDATE_PRODUCTS_WITH_CART = 'UPDATE_PRODUCTS_WITH_CART';
export const GET_SUBPRODUCTS_LIST = 'GET_SUBPRODUCTS_LIST';
export const SET_MULTIFILTER_PRODUCT = 'SET_MULTIFILTER_PRODUCT';
export const SET_QUICK_MULTIFILTER = 'SET_QUICK_MULTIFILTER';
export const REMOVE_MULTIFILTER_PRODUCT = 'REMOVE_MULTIFILTER_PRODUCT';
export const CLEAR_MULTIFILTER_PRODUCT = 'CLEAR_MULTIFILTER_PRODUCT';

export function addProducts(products) {
  return {
    type: ADD_PRODUCTS,
    products,
  };
}

export function getProductsByPage(page = 0) {
  return async (dispatch) => {
    dispatch(loading('product'));
    try {
      await new Promise(resolve => setTimeout(resolve));
      dispatch({
        type: GET_PRODUCTS_BY_PAGE,
        page,
      });
    }

    catch {
      /* Continue regardless of error */
    }

    finally {
      dispatch(loaded('product'));
    }
  };
}

export function fetchAllProducts() {
  const productApi = new ProductAPI();
  return async (dispatch) => {
    dispatch(loading('product'));
    dispatch({
      type: FETCH_ALL_PRODUCTS,
    });
    try {
      const response = await productApi.getAll();
      const products = await normalizeProducts(response.result);
      dispatch(addProducts(products));
    }
    catch {
      dispatch(addProducts([]));
    }

    finally {
      dispatch(loaded('product'));
    }
  };
}

export function updateProductsWithCart() {
  return (dispatch, getState) => {
    const { cart } = getState();
    const cartProductsById = { ...cart.cartProductsById };
    dispatch({
      type: UPDATE_PRODUCTS_WITH_CART,
      cartProductsById,
    });
  };
}

export function setMultiFilterProduct(item) {
  return async (dispatch, getState) => {
    const { product } = getState();
    const { filters } = product;
    try {
      await new Promise(resolve => setTimeout(resolve));
      dispatch({
        type: SET_MULTIFILTER_PRODUCT,
        filters,
        item,
      });
    } catch (err) {
      console.log('setMultiFilter err: ', err);
    }
  };
}

export function removeMultiFilterProduct(word) {
  return async (dispatch, getState) => {
    const { product } = getState();
    const { filters } = product;
    dispatch(loading('product'));
    try {
      await new Promise(resolve => setTimeout(resolve));
      dispatch({
        type: REMOVE_MULTIFILTER_PRODUCT,
        filters,
        word,
      });
    } catch (err) {
      console.log('removeMultiFilter err: ', err);
    } finally {
      dispatch(loaded('product'));
    }
  };
}

export function clearAllFiltersProduct() {
  return async (dispatch) => {
    dispatch(loading('order'));
    try {
      await new Promise(resolve => setTimeout(resolve));
      dispatch({
        type: CLEAR_MULTIFILTER_PRODUCT,
      });
    } catch (err) {
      console.log('clearMultiFilter err: ', err);
    } finally {
      dispatch(loaded('order'));
    }
  };
}

export function filterProducts(word) {
  return async (dispatch, getState) => {
    await dispatch(loading('product'));
    const { tabs } = getState();
    try {
      await new Promise(resolve => setTimeout(resolve));
      switch (tabs.posDisplayTab) {
        case 'grid':
          dispatch({
            type: FILTER_PRODUCTS,
            word,
          });
          break;
        case 'list':
          dispatch(setMultiFilterProduct({ title: 'search', value: word, type: 'search' }));
          break;
        default:
          dispatch({
            type: FILTER_PRODUCTS,
            word,
          });
      }
    }
    catch {
      /* Continue regardless of error */
    }
    finally {
      dispatch(loaded('product'));
    }
  };
}

export function getSubProducts(products) {
  return {
    type: GET_SUBPRODUCTS_LIST,
    products,
  };
}
