import PropTypes from 'prop-types';

const {
  shape,
  bool,
  number,
  string,
} = PropTypes;

export default shape({
  fixed: number,
  percentage: number,
  total: number,
  name: string,
  haveDiscount: bool,
});
