import ClientAPI from '../../api/ClientAPI';
import { loading, loaded } from './loadActions';

export const ADD_CLIENTS = 'ADD_CLIENTS';
export const FETCH_ALL_CLIENTS = 'FETCH_ALL_CLIENTS';
export const ADD_CLIENT_DETAIL = 'ADD_CLIENT_DETAIL';
export const FETCH_CLIENT = 'FETCH_CLIENT';
export function addClients(clients) {
  return {
    type: ADD_CLIENTS,
    clients,
  };
}

export function addClientDetail(client) {
  return {
    type: ADD_CLIENT_DETAIL,
    client,
  };
}

export function fetchAllClients() {
  const clientApi = new ClientAPI();
  return async (dispatch) => {
    dispatch(loading('clients'));
    dispatch({
      type: FETCH_ALL_CLIENTS,
    });
    try {
      const response = await clientApi.getAll();
      console.log('===================fetchAllClients=================');
      console.log({response});
      console.log('====================================');
      const { success, result } = response;
      if (success) {
        dispatch(addClients(result));
      }

      else {
        dispatch(addClients([]));
      }
    }

    catch {
      dispatch(addClients([]));
    }

    finally {
      dispatch(loaded('clients'));
    }
  };
}

export function fetchClientDetail(id) {
  const clientApi = new ClientAPI();
  return async (dispatch) => {
    dispatch(loading('getClient'));
    dispatch({
      type: FETCH_CLIENT,
    });
    try {
      const response = await clientApi.getAccount(id);
      console.log('===================fetchClientDetail=================');
      console.log({response});
      console.log('====================================');
      const { success } = response;
      if (success) {
        //dispatch(addClients(result));
      }

      else {
        //dispatch(addClients([]));
      }
    }

    catch {
      //dispatch(addClients([]));
    }

    finally {
      dispatch(loaded('getClient'));
    }
  };
}
