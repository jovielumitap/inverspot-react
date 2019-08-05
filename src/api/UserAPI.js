/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
import fetch from 'cross-fetch';
import ConfigurationAPI from './ConfigurationAPI';

class UserAPI extends ConfigurationAPI {
  _formatToArray = (sostatus) => {
    const orders = [];
    for (const id in sostatus) {
      const value = sostatus[id];
      orders.push({ id, value });
    }
    return orders;
  }

  _formatConfig = ({ config }) => {
    const newConfig = { ...config };
    const { pos_auto_alm, pos_sininv, sostatus } = newConfig;
    newConfig.pos_auto_alm = pos_auto_alm || '';
    newConfig.pos_sininv = pos_sininv === '1';
    newConfig.sostatus = sostatus || '';
    newConfig.store = this.store.crmid;
    return newConfig;
  }

  logIn = async (domain, token) => {
    this.credentials.headers.Authorization = `Basic ${token}`;
    try {
      const response = await fetch(`${this.protocol}://${domain}/${this.module}/login`, this.credentials);
      const json = await response.json();
      const { success, error, result } = json;

      if (result) {
        result.sostatus = this._formatToArray(result.sostatus);
        result.pos_auto_alm = this._formatToArray(result.pos_auto_alm);
        result.config = this._formatConfig(result);
      }

      return {
        success,
        message: success ? `Bienvenido ${result.first_name} ${result.last_name}` : error.message,
        user: result || {},
      };
    }

    catch {
      return { success: false, message: 'Error en el Host' };
    }
  }

  verify = async () => {
    try {
      const response = await fetch(`${this.url}/login`, this.credentials);
      const json = await response.json();
      const { success, error, result } = json;

      if (result) {
        result.sostatus = this._formatToArray(result.sostatus);
        result.pos_auto_alm = this._formatToArray(result.pos_auto_alm);
        result.config = this._formatConfig(result);
      }

      return {
        success,
        message: success ? '' : (error.message || 'Sesión Expirada'),
        user: result || {},
      };
    }

    catch {
      return { success: false, message: 'Error en el Host' };
    }
  }

  updateConfig = async (config) => {
    this.credentials.method = 'POST';
    this.credentials.body = JSON.stringify(config);

    try {
      const response = await fetch(`${this.url}/Users`, this.credentials);
      const json = await response.json();
      const { success, error, result } = json;

      return {
        success,
        message: success ? 'Cambios Guardados' : error.message,
        result,
      };
    }

    catch {
      return { success: false, message: 'Error en el Host' };
    }
  }

  sendEmail = async (data) => { 
    const { crmid, ...morData } = data;
    this.credentials.method = 'POST';
    this.credentials.body = JSON.stringify(morData);
    try {
      const response = await fetch(`${this.url}/id/${crmid}/email`, this.credentials);
      const json = await response.json();
      return json;
    }

    catch {
      return { success: false, message: 'Error en el Host' };
    }
  }
}

export default UserAPI;
