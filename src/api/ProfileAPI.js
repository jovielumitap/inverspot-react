/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
import axios from 'axios';
import ConfigurationAPI from './ConfigurationAPI';

class ProfileAPI extends ConfigurationAPI {
  getProfile = () => {
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/profile`, this.headers)
      .then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      })
    })
  };
}

export default ProfileAPI;
