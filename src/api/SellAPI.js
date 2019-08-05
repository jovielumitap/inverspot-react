/* eslint-disable camelcase */

import fetch from 'cross-fetch';
import ConfigurationAPI from './ConfigurationAPI';

class SellAPI extends ConfigurationAPI {
  create = async (cart, discount, customer, sostatus, payments) => {
    this.credentials.method = 'POST';

    const totalCart = cart.total;
    const totalDiscount = discount.total;
    const totalToPay = Number((totalCart - totalDiscount).toFixed(2));

    const products = [];
    cart.products.forEach((product) => {
      const custom = {
        option: [
          {
            product_option_value_id: product.crmid,
          },
        ],
        price: product.totalPrice,
        product_id: product.parentId,
        productid: product.crmid,
        quantity: product.quantity,
      };
      products.push(custom);
    });

    const data = {
      products,
      subtotal: cart.subTotal,
      total: totalToPay,
      account_no: customer.selectedCustomer.account_no,
      tpv_payment: payments,
      tpv_discount_amount: discount.fixed,
      tpv_discount_percentage: discount.percentage,
      order_status: sostatus,
    };

    this.credentials.body = JSON.stringify(data);

    try {
      const response = await fetch(`${this.url}/SalesOrder`, this.credentials);
      const json = await response.json();
      const information = json.success ? `Envio con exito N°${json.result.salesorder_no}` : json.error.message;
      const message = { ...json.message, information };
      return { ...json, message };
    }

    catch {
      return { success: false, message: 'Error en el Host' };
    }
  }

  _fde = async (type, payments, related_to) => {
    const data = {
      type,
      flow: payments,
      related_to,
    };

    this.credentials.method = 'POST';
    this.credentials.body = JSON.stringify(data);

    try {
      const response = await fetch(`${this.url}/TreebesFdE`, this.credentials);
      const json = await response.json();
      const information = json.success ? 'Envio con exito' : json.error.message;
      const message = { ...json.message, information };
      return { ...json, message };
    }

    catch {
      return { success: false, message: 'Error en el Host' };
    }
  }

  deliver = async (payments, related_to) => {
    const result = await this._fde('I', payments, related_to);
    return result;
  }

  refund = async (payments, related_to) => {
    const result = await this._fde('O', payments, related_to);
    return result;
  }
}

export default SellAPI;
