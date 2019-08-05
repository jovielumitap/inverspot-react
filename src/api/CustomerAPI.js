import fetch from 'cross-fetch';
import ConfigurationAPI from './ConfigurationAPI';

class CustomerAPI extends ConfigurationAPI {
  create = async (customer) => {
    this.credentials.method = 'POST';

    const data = {
      account_custom_field: {
        120: customer.razonSocial,
        130: customer.rfc,
        140: customer.calle,
        150: customer.numExt,
        160: customer.numInt,
        170: customer.colonia,
        180: customer.pais,
        190: customer.estado,
        200: customer.delegacion,
        210: customer.codigoPostal,
      },
      email: customer.email,
      firstname: customer.nombre,
      lastname: customer.apellidos,
      telephone: customer.telefono,
    };

    this.credentials.body = JSON.stringify(data);

    try {
      const response = await fetch(`${this.url}/list/Accounts`, this.credentials);
      const json = await response.json();
      const message = json.success ? 'Cliente Creado' : 'Error Al Crear';
      return { ...json, message };
    }

    catch {
      return { success: false, message: 'Error en el Host' };
    }
  }

  getAll = async () => {
    try {
      const response = await fetch(`${this.url}/list/Accounts`, this.credentials);
      const json = await response.json();
      return json;
    }

    catch {
      return { success: false, message: 'Error en el Host' };
    }
  }
}

export default CustomerAPI;
