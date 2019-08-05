import {
  ADD_ITEMS_TO_TABLE,
  CLEAR_TABLE,
  SELECT_EMPTY_TO_TABLE,
  CHANGE_FIELD,
  SELECT_TO_DELIVERED,
  SELECT_TO_REFUNDED,
  CHANGE_COMMENT,
} from '../actions/tableActions';

import { tableHelper } from '../../helpers';

/* Default State */
const defaultState = () => ({
  ref: '',
  comments: '',
  date: '',
  store: { name: '...' },
  account: { id: '', nombre: '...' },
  toSell: '',
  items: [],
  enableAction: false,
});

/* Functions */

const addItemsToTable = (state, { typeAction, response, store }) => {
  const { json } = response;
  const newState = tableHelper.transformTableItems(json, typeAction, store);
  return { ...state, ...newState };
};

const emptyAll = (state, { table }) => {
  const { items } = table;
  const newState = tableHelper.emptyFieldsItems(items);
  return { ...state, ...newState };
};

const selectToDelivered = (state, { table }) => {
  const { items } = table;
  const newState = tableHelper.fillToDeliveredItems(items);
  return { ...state, ...newState };
};

const selectToRefunded = (state, { table }) => {
  const { items } = table;
  const newState = tableHelper.fillToRefundedItems(items);
  return { ...state, ...newState };
};

const clearTable = () => {
  const table = defaultState();
  table.items = [];
  return table;
};

const changeField = (state, { obj, table }) => {
  const { items } = table;
  const { crmdi, value } = obj;
  const newArray = [];
  let enableAction = true;
  items.forEach((item) => {
    const newItem = item;
    if (item.crmid === crmdi) {
      // eslint-disable-next-line no-restricted-globals
      if (value === '') newItem.field = 0;
      else newItem.field = parseInt(value, 10);
    }
    // eslint-disable-next-line no-restricted-globals
    if ((newItem.field < 0 || isNaN(newItem.field) || newItem.field > newItem.limit || newItem.field > newItem.qtyinstock) && Math.sign(newItem.qtyinstock) !== -1) {
      enableAction = false;
    }
    newArray.push(newItem);
  });
  const allEmpty = items.filter(newProduct => newProduct.field === 0);
  if (allEmpty.length === items.length) enableAction = false;
  const newState = { items: newArray, enableAction };
  return { ...state, ...newState };
};

const changeComent = (state, { word }) => {
  const newState = {};
  newState.comments = word;
  return { ...state, ...newState };
};

/* Dispatcher */

export default function (state = defaultState(), action) {
  const { type } = action;
  switch (type) {
    case ADD_ITEMS_TO_TABLE:
      return addItemsToTable(state, action);
    case SELECT_EMPTY_TO_TABLE:
      return emptyAll(state, action);
    case SELECT_TO_DELIVERED:
      return selectToDelivered(state, action);
    case SELECT_TO_REFUNDED:
      return selectToRefunded(state, action);
    case CHANGE_FIELD:
      return changeField(state, action);
    case CLEAR_TABLE:
      return clearTable();
    case CHANGE_COMMENT:
      return changeComent(state, action);
    default:
      return state;
  }
}
