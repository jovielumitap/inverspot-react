export const genForm = ({ CRMID, EMPRESA }, typeAction, store) => {
  const toSell = CRMID;
  const account = EMPRESA;
  const move = typeAction === 'deliver' ? 'SC' : 'EC';
  const actual = new Date();
  const seconds = `0${actual.getSeconds()}`.slice(-2);
  const minutes = `0${actual.getMinutes()}`.slice(-2);
  const hours = `0${actual.getHours()}`.slice(-2);
  const day = `0${actual.getDate()}`.slice(-2);
  const month = `0${actual.getMonth() + 1}`.slice(-2);
  const year = actual.getFullYear();
  const date = `${year}-${month}-${day}`;
  const ref = `${move}-${year}${month}${day}${hours}${minutes}${seconds}-1`;
  return { ref, store, toSell, date, account };
};

export const getFieldToDeliver = (newProduct) => {
  const { toDeliver, qtyinstock } = newProduct;
  if (toDeliver > qtyinstock) {
    return (qtyinstock !== 0 ? qtyinstock : 0);
  }
  return toDeliver;
};

export const transformOrder = ({ PRODUCTOS, EXISTENCIAS, ALMACEN }, typeAction) => {
  const items = [];
  let enableAction = true;
  PRODUCTOS.forEach((producto) => {
    const newProduct = {};
    newProduct.crmid = producto.id;
    newProduct.productname = producto.producto;
    newProduct.quantity = producto.cantidad;
    newProduct.delivered = parseInt(producto.entregados, 10);
    newProduct.refunded = producto.devueltos;
    newProduct.toDeliver = parseInt(producto['por entregar'], 10);
    newProduct.toRefund = parseInt(producto['por devolver'], 10);
    newProduct.qtyinstock = parseInt(EXISTENCIAS[ALMACEN][producto.id], 10);
    newProduct.limit = typeAction === 'deliver'
      ? getFieldToDeliver(newProduct)
      : newProduct.toRefund;
    newProduct.field = typeAction === 'deliver'
      ? getFieldToDeliver(newProduct)
      : newProduct.toRefund;
    items.push(newProduct);
  });
  const allEmpty = items.filter(newProduct => newProduct.field === 0);
  if (allEmpty.length === items.length) enableAction = false;
  return { items, enableAction };
};

export const transformTableItems = (json, typeAction, whareHouse) => {
  const newItems = transformOrder(json, typeAction);
  const form = genForm(json, typeAction, whareHouse);
  const { ref, store, toSell, date, account } = form;
  const { items, enableAction } = newItems;
  return { items, ref, store, toSell, date, account, enableAction };
};

export const fillFieldsItems = ([...array]) => {
  const items = [];
  let enableAction = true;
  array.forEach((item) => {
    const newItem = item;
    newItem.field = newItem.qtyinstock;
    items.push(newItem);
  });
  const allEmpty = items.filter(newProduct => newProduct.field === 0);
  if (allEmpty.length === items.length) enableAction = false;
  return { items, enableAction };
};

export const fillToDeliveredItems = ([...array]) => {
  const items = [];
  let enableAction = true;
  array.forEach((item) => {
    const newItem = item;
    if (item.toDeliver <= item.qtyinstock) {
      newItem.field = newItem.toDeliver;
    } else { newItem.field = newItem.qtyinstock; }
    items.push(newItem);
  });
  const allEmpty = items.filter(newProduct => newProduct.field === 0);
  if (allEmpty.length === items.length) enableAction = false;
  return { items, enableAction };
};

export const fillToRefundedItems = ([...array]) => {
  const items = [];
  let enableAction = true;
  array.forEach((item) => {
    const newItem = item;
    newItem.field = newItem.toRefund;
    if (newItem.field <= 0) enableAction = false;
    items.push(newItem);
  });
  return { items, enableAction };
};

export const emptyFieldsItems = ([...array]) => {
  const items = [];
  const enableAction = false;
  array.forEach((item) => {
    const newItem = item;
    newItem.field = 0;
    items.push(newItem);
  });
  return { items, enableAction };
};

export default {
  transformTableItems,
  fillFieldsItems,
  fillToDeliveredItems,
  emptyFieldsItems,
  fillToRefundedItems,
  transformOrder,
};
