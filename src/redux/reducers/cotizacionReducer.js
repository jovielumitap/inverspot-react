import {
  ADD_COTIZACION,
  GET_COTIZACIONES_BY_PAGE,
  FILTER_COTIZACIONES,
  SET_MULTIFILTER_COTIZACION,
  CLEAR_MULTIFILTER_COTIZACION,
  REMOVE_MULTIFILTER_COTIZACION,
} from '../actions/cotizarActions';

import { orderHelper, toolsHelper } from '../../helpers';

const totalItemsForPage = 20;
const defaultState = () => ({
  actualPage: 1,
  totalPages: 1,
  cotizaciones: [],
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
  const { cotizaciones } = state;
  const index = page > 0 ? page - 1 : page;
  const paginatedOrders = orderHelper.paginateOrders(
    cotizaciones,
    totalItemsForPage,
    index,
  );
  return { ...state, ...paginatedOrders };
};

const filterOrder = (state, word) => {
  let paginatedOrders = [...state.cotizaciones];
  const cotizaciones = word.length <= 1 ? paginatedOrders : orderHelper.findOrders(paginatedOrders, word);
  paginatedOrders = orderHelper.paginateOrders(cotizaciones, totalItemsForPage, 0);
  return { ...state, ...paginatedOrders };
};

const addOrders = (state, items) => {
  const cotizaciones = toolsHelper.jsonToArray(items);
  const paginatedOrders = orderHelper.paginateOrders(cotizaciones, totalItemsForPage, 0);
  return { ...state, ...paginatedOrders, cotizaciones };
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


export default (state = defaultState(), action) => {
  const { type } = action;
  switch (type) {
    case ADD_COTIZACION:
      return addOrders(state, action.cotizaciones);
    case GET_COTIZACIONES_BY_PAGE:
      return getOrdersByPage(state, action.page);
    case FILTER_COTIZACIONES:
      return filterOrder(state, action.word);
    case SET_MULTIFILTER_COTIZACION:
      return setFilter(state, action.filters, action.item);
    case REMOVE_MULTIFILTER_COTIZACION:
      return removeFilter(state, action.filters, action.word);
    case CLEAR_MULTIFILTER_COTIZACION:
      return clearFilter(state);
    default:
      return state;
  }
};
