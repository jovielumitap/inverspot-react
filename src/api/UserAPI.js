/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
import axios from 'axios';
import ConfigurationAPI from './ConfigurationAPI';

class UserAPI extends ConfigurationAPI {
  logIn = (token) => {
    this.headers.headers.Authorization = `Basic ${token}`;
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/login`, this.headers)
        .then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
    })
  };
  getAsesorItems = () => {
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/list/asesores`)
        .then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
    })
  };
  registerWithEmailPass = (body) => {
    return new Promise((resolve, reject) => {
      return axios.post(`${this.url}/register`, body)
        .then((response) => {
          resolve(response);
        }).catch((error) => {
          reject(error);
        })
    })
  };

  getTermsConditionContent = () => {
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/terminos-y-condiciones`)
        .then(res => {
          resolve(res);
        }).catch(error => {
          reject(error);
        })
    })
  };

  getPrivacyPolicyContent = () => {
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/aviso-de-privacidad`)
        .then(res => {
          resolve(res);
        }).catch(error => {
          reject(error);
        })
    })
  }

  getContractContent = () => {
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/profile/contract/html`, this.headers)
        .then(res => {
          resolve(res);
        }).catch(error => {
          reject(error);
        })
    })
  };

  submitContract = (body) => {
    return new Promise((resolve, reject) => {
      return axios.put(`${this.url}/profile/firmar`, body, this.headers)
        .then(res => {
          resolve(res);
        }).catch(error => {
          reject(error);
        })
    })
  }
}

export default UserAPI;
