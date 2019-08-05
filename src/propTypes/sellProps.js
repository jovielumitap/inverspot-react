import PropTypes from 'prop-types';

const {
  shape,
  number,
} = PropTypes;

export default shape({
  cash: number,
  card: number,
});
