import lodash from 'lodash';

export const numberFormat = (value, fixed = 2) => {
  let number = value;
  number = Number(number);
  if (!Number.isNaN(number)) {
    number = number.toFixed(fixed);
    number = Number.parseFloat(number);
    return number;
  }
  return value;
};

export const getParentElement = (element, objetive = 'BUTTON') => {
  let target = element;
  const type = objetive.toUpperCase();
  while (target && target.nodeName !== type) {
    target = target.parentElement;
  }
  return target;
};

export const wordInString = (_word, _string) => {
  const word = _word ? _word.toString().toLowerCase().trim() : '';
  const string = _string ? _string.toString().toLowerCase().trim() : '';
  return string.indexOf(word) !== -1;
};

export const paginate = (array, elements, index = -1) => {
  const pagedArray = lodash.chunk(array, elements);
  const result = (index < 0 || index >= pagedArray.length) ? pagedArray : pagedArray[index];
  return {
    pages: pagedArray,
    page: result,
    totalPages: pagedArray.length,
    indexPage: index < 0 ? 0 : index,
  };
};

/* Json to array usign keys as a array element */
export const jsonToArray = json => (
  Object.keys(json).map(_ => ({ ...json[_] }))
);

/* Default format: 000,000.00 */
export const formatMoney = (amount, decimalCount = 2, decimal = ".", thousands = ",") => {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    console.log(e)
  }
};


/**
 * Generate a random number with a max value
 * @param {Integer} max 
 */
export const generateRandomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

/**
 * Generate Categories (no-duplicate array) from a list of elements and a common attribute
 * @param {Array} items [Array of elements]
 * @param {String} comp [Common attribute]
 */
export const getCategories = (items, comp) => {
  const array = items.map(e => e[comp]);
  const newItems = array.filter((item, index) => array.indexOf(item) >= index);
  return newItems;
};

/**
 * Generate categories that are concat by a spacial character (default |)
 * @param {Array} items [Array of elements]
 * @param {String} comp [Word of comparation]
 */
export const getCategoriesByString = (items, comp) => {
  const elements = [];
  const array = items.map(e => e[comp].split('|'));
  array.forEach((arr) => { arr.map(x => elements.push(x)); });
  return elements.filter((item, index) => elements.indexOf(item) >= index);
};

/**
 * Generate an array by a object iteration fixed by keys
 * @param {object} obj [Object to iterate]
 */

export const getArrayWithKeyByJson = (obj) => {
  const array = [];
  Object.entries(obj).forEach((item) => {
    const label = item[0];
    const values = item[1];
    array.push({ label, values });
  });
  return array;
};

export const removeSpecialCharacters = string => string.replace(/[^a-zA-Z0-9]/g, '');

export default {
  formatMoney,
  numberFormat,
  getParentElement,
  wordInString,
  paginate,
  jsonToArray,
  generateRandomNumber,
  getCategories,
  getCategoriesByString,
  getArrayWithKeyByJson,
};
