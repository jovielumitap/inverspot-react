import fetch from 'cross-fetch';
import ConfigurationAPI from './ConfigurationAPI';

class ClientsApi extends ConfigurationAPI {
  getAll = async () => {
    const data = {
      function: 'list_accounts',
    };
    this.credentials.method = 'POST';
    this.credentials.body = JSON.stringify(data);

    try {
      const response = await fetch(`${this.url}/Accounts`, this.credentials);
      const json = await response.json();
      return { ...json };
    }

    catch {
      return { succes: false, result: [], message: 'Error en la API' };
    }
  };
}

export default ClientsApi;
