import { numberFormat, jsonToArray } from './tools';

export const calculateTotals = ([...cartProductsByArray]) => {
  const totals = {
    subTotal: 0,
    totalIva: 0,
    total: 0,
    totalProducts: 0,
    totalWeight: 0,
  };

  cartProductsByArray.forEach((product) => {
    const price = numberFormat(product.unit_price);
    const quantity = numberFormat(product.quantity);
    const iva = numberFormat(product.tax1);
    const weight = numberFormat(product.weight);

    const totalPrice = price * quantity;

    totals.subTotal += totalPrice;
    totals.totalIva += Number.isNaN(iva) ? 0 : totalPrice * (iva / 100);
    totals.total = totals.subTotal + totals.totalIva;
    totals.totalProducts += quantity;
    totals.totalWeight += weight * quantity;
  });

  totals.subTotal = numberFormat(totals.subTotal);
  totals.totalIva = numberFormat(totals.totalIva);
  totals.total = numberFormat(totals.total);
  totals.totalProducts = numberFormat(totals.totalProducts);
  totals.totalWeight = numberFormat(totals.totalWeight);

  return totals;
};

export const transformCartProductsToArrayAndGetTotals = ({ ...cartProductsById }) => {
  const cartProductsByArray = jsonToArray(cartProductsById);
  const totals = calculateTotals(cartProductsByArray);
  /* remove products: cartProductsByArray */
  return { ...totals, cartProductsByArray, products: cartProductsByArray };
};

export const canIncreaseProductInCart = (authUser, product) => (
  authUser.user.config.pos_sininv || product.quantity < product.qtyinstock
);

export const canDecreaseProductInCart = product => (
  product.quantity > 1
);

export const getTotalPrice = product => (
  numberFormat(product.quantity * product.unit_price)
);

export default {
  calculateTotals,
  transformCartProductsToArrayAndGetTotals,
  canIncreaseProductInCart,
  canDecreaseProductInCart,
  getTotalPrice,
};
