import PropTypes from 'prop-types';
import productOptionProps from './productOptionProps';

const {
  shape,
  arrayOf,
  number,
  string,
} = PropTypes;

const productsProps = shape({
  Products: productOptionProps,
  crmid: string,
  images: arrayOf(string),
  image: string,
  marca: string,
  nombre: string,
  unit_price: number,
});

export default shape({
  actualPage: number,
  totalPages: number,
  products: arrayOf(productsProps),
});
