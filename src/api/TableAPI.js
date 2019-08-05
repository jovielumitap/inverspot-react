/* eslint-disable no-restricted-syntax */
import fetch from 'cross-fetch';
import ConfigurationAPI from './ConfigurationAPI';

class TableAPI extends ConfigurationAPI {
  getOrderDetails = async (crmid, almacen, typeAction) => {
    try {
      const mda = typeAction === 'deliver' ? 'SC' : 'EC';
      const URL = `${
        this.mainUrl
      }/index.php?module=TreebesMdA&returnrecord=${crmid}&view=QuickCreateAjax&a_documentoid=${crmid}&tipoMdA=${mda}&desdeApp=Simonalamona&almacenid=${almacen}`;
      const response = await fetch(URL, this.credentials);
      let success = false;
      const json = await response.json();
      json.ALMACEN = almacen;
      if (response._bodyBlob.type === 'application/json') success = true;
      return { json, success };
    } catch (err) {
      return { succes: false, result: [], message: 'Error en la API' };
    }
  };


  /**
 * [setMDA Deliver or Refund a order in a lot of concepts: Wharehouse Moves, Money, anothers.]
 *
 * @param   {object}  table     [table Object result of getState]
 * @param   {object}  cart      [cart Object result of getState]
 * @param   {string}  typeAction  [activity Entregar or Devolver]
 *
 */
  setMDA = async (table, cart, typeAction) => {
    const subModule = 'TreebesMdA';
    this.credentials.method = 'POST';
    this.credentials.headers.Authorization = `Basic ${this.token}`;
    const URL = `${this.url}/${subModule}`;

    const { store } = table;
    const { orderSelected } = cart;
    const data = {
      tipoMdA: typeAction === 'Entregar' ? 'SC' : 'EC',
      desdeApp: 'Simonalamona',
      productos: table.items.map(x => ({ crmid: x.crmid, field: x.field })),
      referencia: table.ref,
      description: table.comments,
      fecha: table.date,
      de_documentoid: typeAction === 'Entregar' ? (store.crmid) : (table.toSell),
      a_documentoid: typeAction === 'Entregar' ? (table.toSell) : (store.crmid),
      empresaid: orderSelected.account_id,
    };
    this.credentials.body = JSON.stringify(data);
    try {
      const response = await fetch(URL, this.credentials);
      const json = await response.json();
      const message = json.success ? 'Movimiento de Almacen exitoso' : json.error.message;
      return { ...json, message };
    }
    catch {
      return { success: false, message: 'Error en el Host' };
    }

  }

}

export default TableAPI;
