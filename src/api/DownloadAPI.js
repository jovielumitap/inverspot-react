/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
import axios from 'axios';
import ConfigurationAPI from './ConfigurationAPI';

class DownloadAPI extends ConfigurationAPI {
  getDownloads = () => {
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/list/downloads`,  this.headers)
      .then((response) => {
        resolve(response);
      }).catch((error) => {
        reject(error);
      })
    })
  };
  downloadPDF = (id) => {
    return new Promise((resolve, reject) => {
      return axios.get(`${this.url}/apartada/pdf/${id}`, {
        responseType: 'blob',
        headers: {
          Accept: 'application/pdf',
          Authorization: `Bearer ${this.token}`
        }
      })
          .then((response) => {
            resolve(response);
          }).catch((error) => {
            reject(error);
          })
    })
  }
}

export default DownloadAPI;
