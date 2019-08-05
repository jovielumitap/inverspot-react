import PropTypes, { bool } from 'prop-types';

const {
  shape,
  arrayOf,
  number,
  string,
} = PropTypes;

const product = shape({
  codigo_barras: string,
  crmid: string,
  opcion: string,
  productname: string,
  qtyinstock: number,
  tax1: number,
  tax2: number,
  tax3: number,
  tax4: number,
  tax5: number,
  tax6: number,
  tax7: number,
  unit_price: number,
  totalPrice: number,
  parentId: string,
  sin_existencia: bool,
});

export default arrayOf(product);
