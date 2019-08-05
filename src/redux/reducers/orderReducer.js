import {
  ADD_ORDERS,
  GET_ORDERS_BY_PAGE,
  FILTER_ORDERS,
  SET_MULTIFILTER_ORDER,
  REMOVE_MULTIFILTER_ORDER,
  CLEAR_MULTIFILTER_ORDER,
  FETCH_FILTER,
} from '../actions/orderActions';

import { orderHelper, toolsHelper } from '../../helpers';

const totalItemsForPage = 20;
const defaultState = () => ({
  actualPage: 1,
  totalPages: 1,
  orders: [],
  paginatedOrders: [],
  filters: [],
  categories: [{
    title: 'Todos',
    word: 'general',
    cats: [
      { title: 'ID', column: 'crmid', type: 'general' },
      { title: 'Numero de Orden', column: 'salesorder_no', type: 'general' },
      { title: 'Estado', column: 'sostatus', type: 'general' },
      { title: 'Total', column: 'hdnGrandTotal', type: 'general' },
      { title: 'Movimiento de almacen', column: 'estado_mda', type: 'general' },
      { title: 'Flujo de efectivo', column: 'estado_fde', type: 'general' },
    ],
  }],
});

const getOrdersByPage = (state, page = 0) => {
  const { orders } = state;
  const index = page > 0 ? page - 1 : page;
  const paginatedOrders = orderHelper.paginateOrders(
    orders,
    totalItemsForPage,
    index,
  );
  return { ...state, ...paginatedOrders };
};

const filterOrder = (state, word) => {
  let paginatedOrders = [...state.orders];
  const orders = word.length <= 1 ? paginatedOrders : orderHelper.findOrders(paginatedOrders, word);
  paginatedOrders = orderHelper.paginateOrders(orders, totalItemsForPage, 0);
  return { ...state, ...paginatedOrders };
};

const addOrders = (state, items) => {
  const orders = toolsHelper.jsonToArray(items);
  const paginatedOrders = orderHelper.paginateOrders(orders, totalItemsForPage, 0);
  return { ...state, ...paginatedOrders, orders };
};

const setFilter = (state, filters, element) => {
  const array = filters.filter(x => x.type === element.type);
  if (array.length === 0) {
    filters.push(element);
  } else {
    filters.forEach((x, index) => {
      if (x.type === array[0].type) { filters[index] = element; }
    });
  }
  return { ...state, filters };
};

const removeFilter = (state, filters, word) => {
  const array = filters.filter(x => x.type === word);
  if (array.length !== 0) {
    filters.forEach((filter, i) => {
      if (filter.type === word) filters.splice(i, 1);
    });
  }
  return { ...state, filters };
};

const clearFilter = (state) => {
  const filters = [];
  return { ...state, filters };
};

const fetchFilter = (state, order) => {
  const ordersTable = orderHelper.filterOrders(order.orders, order.filters);
  return { ...state, ordersTable };
};

export default (state = defaultState(), action) => {
  const { type } = action;
  switch (type) {
    case ADD_ORDERS:
      return addOrders(state, action.orders);
    case GET_ORDERS_BY_PAGE:
      return getOrdersByPage(state, action.page);
    case FILTER_ORDERS:
      return filterOrder(state, action.word);
    case SET_MULTIFILTER_ORDER:
      return setFilter(state, action.filters, action.item);
    case REMOVE_MULTIFILTER_ORDER:
      return removeFilter(state, action.filters, action.word);
    case CLEAR_MULTIFILTER_ORDER:
      return clearFilter(state);
    case FETCH_FILTER:
      return fetchFilter(state, action.order);
    default:
      return state;
  }
};
