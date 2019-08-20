import { userHelper } from '../helpers';

class ConfigurationAPI {
  constructor() {
    const authUser = userHelper.getStorage();

    this.token = authUser.isAuth ? authUser.token : '';
    this.domain = 'crm.treebes2.com/api';

    this.protocol = 'https';
    this.headers = {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    };
    this.url = `${this.protocol}://${this.domain}`;
  }
}

export default ConfigurationAPI;
