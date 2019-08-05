/* eslint-disable no-restricted-syntax */
import fetch from 'cross-fetch';
import ConfigurationAPI from './ConfigurationAPI';

class ProductAPI extends ConfigurationAPI {
  getAll = async () => {
    try {
      const response = await fetch(`${this.url}/list/TreebesProductosOC`, this.credentials);
      const json = await response.json();
      return json;
    }

    catch {
      return { succes: false, result: [], message: 'Error en la API' };
    }
  };
}

export default ProductAPI;
