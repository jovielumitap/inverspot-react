import PropTypes from 'prop-types';

const {
  shape,
  arrayOf,
  bool,
  string,
} = PropTypes;

const configProps = shape({
  pos_auto_alm: string,
  pos_sininv: bool,
  sostatus: string,
});

const sostatusProps = shape({
  id: string,
  value: string,
});

const accountDefaultProps = shape({
  account_no: string,
  accountname: string,
  crmid: string,
  firstname: string,
  lastname: string,
  razon_social: string,
  siccode: string,
  auto_alm: arrayOf(string),
});

const userProps = shape({
  firstname: string,
  lastname: string,
  account_default: accountDefaultProps,
  sostatus: arrayOf(sostatusProps),
  config: configProps,
});

export default shape({
  isAuth: bool,
  token: string,
  domain: string,
  user: userProps,
  remember: bool,
});
