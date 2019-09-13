/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
import axios from 'axios';
import ConfigurationAPI from './ConfigurationAPI';

class ParticipationAPI extends ConfigurationAPI {
  getParticipations = () => {
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/list/apartadas`,  this.headers)
      .then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      })
    })
  };
  participationDetail = (id) => {
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/apartadas/${id}`,  this.headers)
          .then((response) => {
            resolve(response);
          }).catch((error) => {
            reject(error);
          })
    })
  };
  confirmInvestment = (body) => {
    return new Promise((resolve, reject) => {
      return axios.put(`${this.url}/apartada/firmar`, body,  this.headers)
          .then((response) => {
            resolve(response);
          }).catch((error) => {
            reject(error);
          })
    })
  };
}

export default ParticipationAPI;
