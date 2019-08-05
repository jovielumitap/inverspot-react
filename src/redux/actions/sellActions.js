import { toast } from 'react-toastify';
import SellAPI from '../../api/SellAPI';
import { clearCart } from './cartActions';
import { removeCustomer } from './customerActions';
import { removeDiscount } from './discountActions';
import { fetchAllProducts } from './productActions';
import { fetchAllOrders, selectOrder } from './orderActions';
import { closeModal } from './modalActions';
import { loading, loaded } from './loadActions';
import { changeTab } from './tabActions';

export const CHANGE_SELL_CASH = 'CHANGE_SELL_CASH';
export const CHANGE_SELL_CARD = 'CHANGE_SELL_CARD';
export const CHANGE_SELL_ORDER_STATUS = 'CHANGE_SELL_ORDER_STATUS';
export const CLEAR_SELL = 'CLEAR_SELL';

export function changeSellCash(cash) {
  return {
    type: CHANGE_SELL_CASH,
    cash,
  };
}

export function changeSellCard(card) {
  return {
    type: CHANGE_SELL_CARD,
    card,
  };
}

export function changeSalesOrderStatus(sostatus) {
  return {
    type: CHANGE_SELL_ORDER_STATUS,
    sostatus,
  };
}


export function clearSell() {
  return {
    type: CLEAR_SELL,
  };
}

const displayGroupMessage = (message) => {
  if (message.success) {
    toast.success(` ✔ ${message.success}`);
  }

  else if (message.warning) {
    toast.warn(` ❕ ${message.warning}`);
  }

  else if (message.error) {
    toast.error(` ❌ ${message.error}`);
  }

  else {
    toast.success(` ❔ ${message.information}`);
  }
};

export function makeSell(payments) {
  return async (dispatch, getState) => {
    const sellApi = new SellAPI();
    const {
      cart,
      discount,
      customer,
      sell,
    } = getState();
    dispatch(loading('sell'));
    dispatch(loading('checkout')); /* Hot FIX */
    toast.info(' 🚀 Enviando...');
    try {
      const { sostatus } = sell;
      const response = await sellApi.create(cart, discount, customer, sostatus, payments);
      const { success, message } = response;
      if (success) {
        displayGroupMessage(message);
        dispatch(clearCart());
        dispatch(removeCustomer());
        dispatch(removeDiscount());
        dispatch(fetchAllProducts());
        dispatch(fetchAllOrders());
        setTimeout(() => {
          dispatch(closeModal('sell'));
          dispatch(closeModal('checkout')); /* Hot FIX */
          dispatch(clearSell());
        }, 1000);
      }

      else {
        toast.error(message);
      }
    }

    catch {
      toast.error('Error en la API');
    }

    finally {
      dispatch(loaded('sell'));
      dispatch(loaded('checkout')); /* Hot FIX */
    }
  };
}

const _fde = (type, payments, orderId, modal, loader) => (
  async (dispatch) => {
    const sellApi = new SellAPI();
    dispatch(loading(loader));
    toast.info('Enviando...');

    try {
      let response = {};
      if (type === 'I') {
        response = await sellApi.deliver(payments, orderId);
      }

      else if (type === 'O') {
        response = await sellApi.refund(payments, orderId);
      }
      const { success, message } = response;
      if (success) {
        displayGroupMessage(message);
        dispatch(clearCart());
        await dispatch(fetchAllOrders());
        await dispatch(selectOrder(orderId));
        dispatch(closeModal(modal));
      }

      else {
        toast.error(message);
      }
    }

    catch {
      toast.error('Error en la API');
    }

    finally {
      dispatch(loaded(loader));
    }
  }
);

export function deliverMoney(payments, orderId) {
  return _fde('I', payments, orderId, 'checkout', 'checkout');
}

export function refundMoney(payments, orderId) {
  return _fde('O', payments, orderId, 'checkoutRefound', 'checkoutRefound');
}

export function saveSell() {
  return async (dispatch, getState) => {
    const sellApi = new SellAPI();
    const {
      cart,
      discount,
      customer,
      sell,
    } = getState();
    toast.info(' 🚀 Enviando...');
    dispatch(loading('pos'));
    try {
      const { sostatus } = sell;
      const response = await sellApi.create(cart, discount, customer, sostatus, []);
      const { success, message, result } = response;
      if (success) {
        displayGroupMessage(message);
        dispatch(clearCart());
        dispatch(removeCustomer());
        dispatch(removeDiscount());
        dispatch(fetchAllProducts());
        await dispatch(fetchAllOrders());
        await dispatch(changeTab('posType', 'Historico'));
        const { crmid } = result;
        dispatch(selectOrder(crmid));
      }

      else {
        toast.error(message);
      }
    }

    catch {
      toast.error('Error en la API');
    }

    finally {
      dispatch(loaded('pos'));
    }
  };
}
