/* eslint camelcase: 0 */
/* eslint-disable no-underscore-dangle */
/* eslint-disable object-curly-newline */
/* eslint-disable prefer-destructuring */

import {
  ADD_PRODUCT_TO_CART,
  ADD_ORDER_TO_CART,
  INCREASE_PRODUCT_IN_CART,
  DECREASE_PRODUCT_IN_CART,
  UPDATE_PRODUCT_PRICE_IN_CART,
  UPDATE_SERVICE_PRICE_BY_WEIGHT_CART,
  UPDATE_PRODUCT_QTY_IN_CART,
  REMOVE_PRODUCT_IN_CART,
  CLEAR_CART,
} from '../actions/cartActions';

import { cartHelper, toolsHelper } from '../../helpers';

const defaultState = () => ({
  products: [],
  subTotal: 0,
  totalIva: 0,
  total: 0,
  totalProducts: 0,
  totalWeight: 0,
  cartProductsById: {},
  cartProductsByArray: [],
  orderSelected: {},
});

const addProductToCart = (state, { parentId, crmid, productsById, quantity }) => {
  const cartProductsById = { ...state.cartProductsById };

  if (crmid in cartProductsById) {
    const cartProduct = { ...cartProductsById[crmid] };
    if (quantity && cartProduct.quantity !== quantity) {
      cartProduct.quantity += quantity;
      cartProductsById[crmid] = cartProduct;
    }

    else {
      cartProduct.quantity += 1;
      cartProductsById[crmid] = cartProduct;
    }
  }

  else if (parentId in productsById && crmid in productsById[parentId].Products) {
    const product = { ...productsById[parentId].Products[crmid] };
    product.quantity = quantity || 1;
    cartProductsById[crmid] = product;
  }

  else {
    return state;
  }

  const newState = cartHelper.transformCartProductsToArrayAndGetTotals(cartProductsById);
  return { ...state, ...newState, cartProductsById };
};

const addOrderToCart = (state, { order, productsById }) => {
  const { LineItems } = order;
  const cartProductsById = { ...state.cartProductsById };

  LineItems.forEach((product) => {
    const { parent_id } = product;
    const productid = product.productid.indexOf('x') !== -1 ? product.productid.split('x')[1] : product.productid;
    const quantity = toolsHelper.numberFormat(product.quantity);

    if (parent_id in productsById && productid in productsById[parent_id].Products) {
      cartProductsById[productid] = { ...productsById[parent_id].Products[productid] };
      cartProductsById[productid].quantity = quantity;
    }
  });

  const newState = cartHelper.transformCartProductsToArrayAndGetTotals(cartProductsById);
  const orderSelected = { order };
  const { treebesalmid, account_id } = order;
  orderSelected.cartStateWarehouse = order.estado_mda;
  orderSelected.almid = treebesalmid ? treebesalmid.split('x')[1] : 0;
  orderSelected.account_id = account_id.split('x')[1];
  orderSelected.balance = Number.parseFloat(order.tfde_balance);
  orderSelected.total = Number.parseFloat(order.hdnGrandTotal);
  orderSelected.entregado = order.p_entregado;
  orderSelected.status = order.sostatus;
  orderSelected.crmid = order.crmid;
  return { ...state, ...newState, orderSelected, cartProductsById };
};

const increaseProductInCart = (state, { crmid }) => {
  const cartProductsById = { ...state.cartProductsById };
  if (crmid in cartProductsById) {
    const product = cartProductsById[crmid];
    product.quantity += 1;
    cartProductsById[crmid] = product;

    const newState = cartHelper.transformCartProductsToArrayAndGetTotals(cartProductsById);
    return { ...state, ...newState, cartProductsById };
  }
  return state;
};

const decreaseProductInCart = (state, { crmid }) => {
  const cartProductsById = { ...state.cartProductsById };
  if (crmid in cartProductsById) {
    const product = cartProductsById[crmid];
    product.quantity -= 1;
    cartProductsById[crmid] = product;

    const newState = cartHelper.transformCartProductsToArrayAndGetTotals(cartProductsById);
    return { ...state, ...newState, cartProductsById };
  }
  return state;
};

const updateProductPriceInCart = (state, { crmid, price, productsById }) => {
  const cartProductsById = { ...state.cartProductsById };
  if (crmid in cartProductsById) {
    if (!Number.isNaN(price) && price > 0) {
      cartProductsById[crmid].unit_price = price;
    }

    else {
      const { parentId } = cartProductsById[crmid];
      const { unit_price } = productsById[parentId].Products[crmid];
      cartProductsById[crmid].unit_price = unit_price;
    }

    const newState = cartHelper.transformCartProductsToArrayAndGetTotals(cartProductsById);
    return { ...state, ...newState, cartProductsById };
  }
  return state;
};

const updateProductQuantityInCart = (state, { crmid, qty }) => {
  const cartProductsById = { ...state.cartProductsById };
  if (crmid in cartProductsById) {
    if (!Number.isNaN(qty) && qty > 0) {
      cartProductsById[crmid].quantity = qty;
    } else { cartProductsById[crmid].quantity = cartProductsById[crmid].qtyinstock; }

    const newState = cartHelper.transformCartProductsToArrayAndGetTotals(cartProductsById);
    return { ...state, ...newState, cartProductsById };
  }
  return state;
};

function updateServicePriceByWeightCart(state, { cen }) {
  const cartProductsById = { ...state.cartProductsById };
  const {
    id_envio_aereo,
    envio_aereo,
    id_envio_terrestre,
    envio_terrestre,
  } = cen;
  let { totalWeight } = state;

  if (totalWeight === Math.floor(totalWeight)) {
    totalWeight = totalWeight === 0 ? 0 : totalWeight - 1;
  }

  totalWeight = Math.floor(totalWeight);
  totalWeight = totalWeight > 100 ? 100 : totalWeight;

  if (id_envio_aereo in cartProductsById) {
    const envioAereo = cartProductsById[id_envio_aereo];
    const price = envio_aereo[totalWeight] || 0;
    envioAereo.unit_price = price;
    envioAereo.totalPrice = price;
    cartProductsById[id_envio_aereo] = envioAereo;
  }

  if (id_envio_terrestre in cartProductsById) {
    const envioTerrestre = cartProductsById[id_envio_terrestre];
    const price = envio_terrestre[totalWeight] || 0;
    envioTerrestre.unit_price = price;
    envioTerrestre.totalPrice = price;
    cartProductsById[id_envio_terrestre] = envioTerrestre;
  }

  if (id_envio_aereo in cartProductsById || id_envio_terrestre in cartProductsById) {
    const newState = cartHelper.transformCartProductsToArrayAndGetTotals(cartProductsById);
    return { ...state, ...newState, cartProductsById };
  }

  return state;
}

const removeProductInCart = (state, { crmid }) => {
  const cartProductsById = { ...state.cartProductsById };
  if (crmid in cartProductsById) {
    delete cartProductsById[crmid];
    const newState = cartHelper.transformCartProductsToArrayAndGetTotals(cartProductsById);
    return { ...state, ...newState, cartProductsById };
  }
  return state;
};

const clearCart = () => {
  const cart = defaultState();
  cart.products = [];
  return cart;
};

export default function (state = defaultState(), action) {
  const { type } = action;
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return addProductToCart(state, action);
    case ADD_ORDER_TO_CART:
      return addOrderToCart(state, action);
    case INCREASE_PRODUCT_IN_CART:
      return increaseProductInCart(state, action);
    case DECREASE_PRODUCT_IN_CART:
      return decreaseProductInCart(state, action);
    case UPDATE_PRODUCT_PRICE_IN_CART:
      return updateProductPriceInCart(state, action);
    case UPDATE_SERVICE_PRICE_BY_WEIGHT_CART:
      return updateServicePriceByWeightCart(state, action);
    case UPDATE_PRODUCT_QTY_IN_CART:
      return updateProductQuantityInCart(state, action);
    case REMOVE_PRODUCT_IN_CART:
      return removeProductInCart(state, action);
    case CLEAR_CART:
      return clearCart();
    default:
      return state;
  }
}
