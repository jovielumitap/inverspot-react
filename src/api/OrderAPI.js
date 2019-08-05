import fetch from 'cross-fetch';
import ConfigurationAPI from './ConfigurationAPI';

class OrderAPI extends ConfigurationAPI {
  getAll = async () => {
    try {
      const response = await fetch(
        `${this.url}/list/SalesOrder`,
        this.credentials
      );
      const json = await response.json();
      return { ...json };
    } catch {
      return { succes: false, result: [], message: 'Error en la API' };
    }
  };
}

export default OrderAPI;
