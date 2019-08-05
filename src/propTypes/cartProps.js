import PropTypes from 'prop-types';

const {
  shape,
  arrayOf,
  number,
  string,
} = PropTypes;

export const productProps = shape({
  id: number,
  parentId: string,
  name: string,
  type: string,
  price: number,
  priceWithTax: number,
  stock: number,
  actualStock: number,
  iva: number,
  image: string,
  quantity: number,
});

export const cartProps = shape({
  products: arrayOf(productProps),
  subTotal: number,
  totalIva: number,
  total: number,
  totalProducts: number,
});
