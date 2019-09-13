/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
import axios from 'axios';
import ConfigurationAPI from './ConfigurationAPI';

class ReferralAPI extends ConfigurationAPI {
  getReferrals = () => {
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/list/referidos`,  this.headers)
      .then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      })
    })
  };
  referralDetail = (id) => {
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/referidos/${id}`,  this.headers)
          .then((response) => {
            resolve(response);
          }).catch((error) => {
            reject(error);
          })
    })
  };
}

export default ReferralAPI;
