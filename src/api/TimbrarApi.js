import fetch from 'cross-fetch';
import ConfigurationAPI from './ConfigurationAPI';

class TimbrarApi extends ConfigurationAPI {
  get = async (crmid) => {
    const url = `${this.mainUrl}/modules/TreebesSatCFDI/treebes_funciones.php`;
    const data = {
      funcion: 'timbraparcial',
      desdeApp: 'Simonalamona',
      crmid, /* Order id */
    };
    this.credentials.method = 'POST';
    this.credentials.body = JSON.stringify(data);

    try {
      const response = await fetch(url, this.credentials);
      const json = await response.json();
      return { ...json };
    }

    catch {
      return { succes: false, result: [], message: 'Error en la API' };
    }
  };

  save = async (timbre) => {
    const url = `${this.url}/Timbra`;
    const {
      crmid,
      formapago,
      metodopago,
      uso,
    } = timbre;
    const data = {
      desdeApp: 'Simonalamona',
      organization_id: 1,
      salesorderid: crmid,
      uso,
      forma: formapago,
      metodo: metodopago,
    };

    this.credentials.method = 'POST';
    this.credentials.body = JSON.stringify(data);

    try {
      const response = await fetch(url, this.credentials);
      const json = await response.json();
      return { ...json };
    }

    catch {
      return { succes: false, result: [], message: 'Error en la API' };
    }
  };
}

export default TimbrarApi;
