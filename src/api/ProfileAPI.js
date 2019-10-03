/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable camelcase */
import axios from 'axios';
import ConfigurationAPI from './ConfigurationAPI';

class ProfileAPI extends ConfigurationAPI {
  getProfile = () => new Promise((resolve, reject) => axios.get(`${this.url}/profile`, this.headers)
    .then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    }));

  getProfileScheme = () => new Promise((resolve, reject) => axios.get(`${this.url}/profile/scheme`, this.headers)
    .then((response) => {
      resolve(response);
    }).catch((error) => {
      reject(error);
    }));

  setProfileParams = params => new Promise((resolve, reject) => {
    const data = { ...params };
    const formData = new FormData();
    Object.entries(data).forEach((field) => {
      formData.append(field[0], field[1]);
    });
    axios.post(`${this.url}/profile`, formData, this.headers)
      .then((response) => {
        resolve(response);
      }).catch(err => reject(err));
  })
}

export default ProfileAPI;
