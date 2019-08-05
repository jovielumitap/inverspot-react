import PropTypes from 'prop-types';

const {
  shape,
  arrayOf,
  bool,
  string,
} = PropTypes;

const customer = shape({
  crmid: string,
  account_no: string,
  accountname: string,
  siccode: string,
  razon_social: string,
  firstname: string,
  lastname: string,
  email1: string,
  phone: string,
});

export default shape({
  customers: arrayOf(customer),
  defaultCustomer: customer,
  selectedCustomer: customer,
  isDefault: bool,
});
