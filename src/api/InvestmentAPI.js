/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
import axios from 'axios';
import ConfigurationAPI from './ConfigurationAPI';

class InvestmentAPI extends ConfigurationAPI {
  getInvestments = () => {
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/list/inversiones`,  this.headers)
      .then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      })
    })
  };
  investmentDetail = (id) => {
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/inversiones/${id}`,  this.headers)
          .then((response) => {
            resolve(response);
          }).catch((error) => {
            reject(error);
          })
    })
  };
}

export default InvestmentAPI;
