/* eslint-disable no-underscore-dangle */
import {
  ADD_CUSTOMERS,
  SET_DEFAULT_CUSTOMER,
  SELECT_CUSTOMER,
  REMOVE_CUSTOMER,
  FILTER_CUSTOMERS,
} from '../actions/customerActions';

const defaultState = () => ({
  customers: [],
  customersById: {},
  customersByArray: [],
  defaultCustomer: {},
  selectedCustomer: {},
  isDefault: true,
});

const addCustomers = (state, customers) => ({
  ...state,
  customers,
  customersByArray: customers,
});

const selectCustomer = (state, customer) => ({
  ...state,
  selectedCustomer: customer,
  isDefault: false,
});

const removeCustomer = (state) => {
  const customer = { ...state };
  customer.selectedCustomer = customer.defaultCustomer;
  customer.isDefault = true;
  return { ...state, ...customer };
};

const filterCustomers = (state, target) => {
  const { customersByArray } = { ...state };
  const word = target.toLowerCase();

  if (word.length > 2) {
    const customers = customersByArray.filter(customer => (
      (customer.siccode || '').toLowerCase().indexOf(word) !== -1
      || (customer.firstname || '').toLowerCase().indexOf(word) !== -1
      || (customer.lastname || '').toLowerCase().indexOf(word) !== -1
    ));

    return { ...state, customers };
  }
  return { ...state, customers: customersByArray };
};

export default function (state = defaultState(), action) {
  const { type } = action;
  switch (type) {
    case ADD_CUSTOMERS:
      return addCustomers(state, action.customers);
    case SET_DEFAULT_CUSTOMER:
      return { ...state, defaultCustomer: action.customer };
    case SELECT_CUSTOMER:
      return selectCustomer(state, action.customer);
    case REMOVE_CUSTOMER:
      return removeCustomer(state);
    case FILTER_CUSTOMERS:
      return filterCustomers(state, action.word);
    default:
      return state;
  }
}
