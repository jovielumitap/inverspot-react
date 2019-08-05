/* eslint-disable camelcase */

import fetch from 'cross-fetch';
import ConfigurationAPI from './ConfigurationAPI';

class CotizarAPI extends ConfigurationAPI {
  create = async (cart, discount, customer, sostatus) => {
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
      tpv_discount_amount: discount.fixed,
      tpv_discount_percentage: discount.percentage,
      order_status: sostatus,
    };

    this.credentials.body = JSON.stringify(data);

    try {
      const response = await fetch(`${this.url}/Quotes`, this.credentials);
      const json = await response.json();
      const information = json.success ? `Guardado Exitoso ${json.result.salesorder_no}` : json.error.message;
      const message = { ...json.message, information };
      return { ...json, message };
    }

    catch {
      return { success: false, message: 'Error en el Host' };
    }
  }

  getAll = async () => {
    try {
      const response = await fetch(`${this.url}/list/Quotes`, this.credentials);
      const json = await response.json();
      return { ...json };
    } catch {
      return { succes: false, result: [], message: 'Error en la API' };
    }
  };
}

export default CotizarAPI;
