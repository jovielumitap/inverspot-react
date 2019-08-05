import fetch from 'cross-fetch';
import ConfigurationAPI from './ConfigurationAPI';

class ClientAPI extends ConfigurationAPI {

  getAll = async () => {
    try {
      const response = await fetch(`${this.url}/Accounts?function=list_accounts`, this.credentials);
      const json = await response.json();
      return json;
    }

    catch {
      return { success: false, message: 'Error en el Host' };
    }
  };
  getAccount = async (id) => {
    try {
      const response = await fetch(`${this.url}/Accounts?function=get_account&id=56736`, this.credentials);
      const json = await response.json();
      return json;
    }catch (e) {
      return { success: false, message: 'Error en el Host' };
    }
  }
}

export default ClientAPI;
