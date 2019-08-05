import fetch from 'cross-fetch';
import ConfigurationAPI from './ConfigurationAPI';

class BalanceAPI extends ConfigurationAPI {
  getBalance = async () => {
    try {
      const uri = `${this.mainUrl}/modules/TreebesFdE/treebes_funciones.php?funcion=totalescc`;
      const repsonse = await fetch(uri, this.credentials);
      const json = await repsonse.json();
      return { ...json };
    } catch {
      return {
        success: false,
        result: [],
        message: 'Error al obtener Balance',
      };
    }
  };

  getCC = async (rango = '') => {
    /*
      tfde_rango_fechas 0000-00-00 to 0000-00-00 { format }
    */
    try {
      let uri = `${this.mainUrl}/modules/TreebesFdE/treebes_funciones.php?funcion=solicitacc&desdeApp=Simonalamona`;
      uri = rango ? `${uri}&tfde_rango_fechas=${rango}` : uri;
      const repsonse = await fetch(uri, this.credentials);
      const json = await repsonse.json();
      return { ...json };
    }
    catch {
      return {
        success: false,
        result: [],
        message: 'Error al obtener Información del Corte de Caja',
      };
    }
  };

  getACC = async () => {
    try {
      const uri = `${this.mainUrl}/modules/TreebesFdE/treebes_funciones.php?funcion=autorizacc&desdeApp=Simonalamona`;
      const repsonse = await fetch(uri, this.credentials);
      const json = await repsonse.json();
      return { ...json };
    } catch {
      return {
        success: false,
        result: [],
        message: 'Error al obtener Información de Autorizar Corte de Caja',
      };
    }
  }

  saveCC = async (idsSolcc, idsSuicc) => {
    const url = `${this.mainUrl}/modules/TreebesFdE/treebes_funciones.php`;

    this.credentials.method = 'POST';
    this.credentials.body = JSON.stringify({
      funcion: 'guarda_solicitudcc',
      desdeApp: 'Simonalamona',
      ids_solcc: JSON.stringify(idsSolcc),
      ids_quicc: JSON.stringify(idsSuicc),
    });

    try {
      const repsonse = await fetch(url, this.credentials);
      const json = await repsonse.json();
      return { ...json };
    }

    catch {
      return {
        success: false,
        result: [],
        message: 'Error al obtener Información de Autorizar Corte de Caja',
      };
    }
  }

  saveACC = async (idsSolcc) => {
    const url = `${this.mainUrl}/modules/TreebesFdE/treebes_funciones.php`;

    this.credentials.method = 'POST';
    this.credentials.body = JSON.stringify({
      funcion: 'guarda_autorizacc',
      desdeApp: 'Simonalamona',
      ids_autcc: JSON.stringify(idsSolcc),
    });

    try {
      const repsonse = await fetch(url, this.credentials);
      const json = await repsonse.json();
      return { ...json };
    }

    catch {
      return {
        success: false,
        result: [],
        message: 'Error al obtener Información de Autorizar Corte de Caja',
      };
    }
  }
}

export default BalanceAPI;
