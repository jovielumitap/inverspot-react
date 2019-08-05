import { userHelper } from '../helpers';

class ConfigurationAPI {
  constructor() {
    const authUser = userHelper.getStorage();

    this.store = authUser.isAuth ? authUser.user.config.store : '';
    this.token = authUser.isAuth ? authUser.token : '';
    this.domain = authUser.isAuth ? authUser.domain : '';

    this.protocol = 'https';
    this.module = 'comercia_ws';
    this.credentials = {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
      headers: {
        Authorization: `Basic ${this.token}`,
        almacen: this.store.crmid,
      },
    };
    this.url = `${this.protocol}://${this.domain}/${this.module}`;
    this.mainUrl = `${this.protocol}://${this.domain}`;
  }
}

export default ConfigurationAPI;
