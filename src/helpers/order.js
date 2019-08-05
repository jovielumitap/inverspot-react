import { paginate, wordInString } from './tools';

export const paginateOrders = (ordersArray, totalItemsForPage, index = 0) => {
  const _paginateOrders = paginate(ordersArray, totalItemsForPage, index);
  const { page, indexPage, totalPages } = _paginateOrders;
  const paginatedOrders = page;
  const actualPage = indexPage + 1;
  return {
    paginatedOrders,
    actualPage,
    totalPages,
  };
};

export const findOrders = (orders, word) => {
  const result = orders.filter(order => wordInString(word, order.crmid)
  || wordInString(word, order.estado_fde)
  || wordInString(word, order.salesorder_no)
  || wordInString(word, order.estado_mda)
  || wordInString(word, order.sostatus));
  return result;
};

/**
 * Return orders filtering by categories
 * @param {Array} orders Array of all the elements to be filter
 * @param {Array} words Array of objects that contain word of filtering and attribute
 */
export const filterOrders = (orders, words) => {
  let elements = [];
  words.forEach((item, i) => {
    const res = orders.filter(order => wordInString(item.value, order[`${item.word}`]));
    elements = res;
  });
  return elements;
};

export const filterOrderByAttribute = (orders, word, attribute) => {
  const result = orders.filter(order => wordInString(word, order[attribute]));
  return result;
};

export const shouldCharge = balance => (
  balance > 0
);

export const shouldDeliver = _mda => (
  _mda.toLowerCase() !== 'entregado'
);

export const shoulrRefoundMoney = (balance, total) => (
  balance < total
);

export const shoulrRefoundProducts = _fde => (
  _fde.toLowerCase() === 'entregado' || _fde.toLowerCase() === 'parcialmente entregado'
);

export default {
  paginateOrders,
  findOrders,
  filterOrders,
  shouldDeliver,
  shoulrRefoundMoney,
  shoulrRefoundProducts,
};
