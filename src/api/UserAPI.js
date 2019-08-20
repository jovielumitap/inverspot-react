/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
import axios from 'axios';
import ConfigurationAPI from './ConfigurationAPI';

class UserAPI extends ConfigurationAPI {
  logIn = (token) => {
    console.log({token});
    this.headers.headers.Authorization = `Basic ${token}`;
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/login`,  this.headers)
      .then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      })
    })
  };
}

export default UserAPI;
