/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
import axios from 'axios';
import ConfigurationAPI from './ConfigurationAPI';

class OpportunityAPI extends ConfigurationAPI {
  getOpportunities = () => {
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/list/proyectos/activos`,  this.headers)
      .then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      })
    })
  };
  opportunityDetail = (id) => {
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/proyectos/${id}`,  this.headers)
          .then((response) => {
            resolve(response);
          }).catch((error) => {
            reject(error);
          })
    })
  };
  requestApartar = (body) => {
    return new Promise((resolve, reject) => {
      return axios.post(`${this.url}/apartar`, body,  this.headers)
          .then((response) => {
            resolve(response);
          }).catch((error) => {
            reject(error);
          })
    })
  };
}

export default OpportunityAPI;
