/* eslint-disable camelcase */
import { toast } from 'react-toastify';
import FileSaver from 'file-saver';
import UserAPI from '../../api/UserAPI';
import { loading, loaded } from './loadActions';
import {
  AUTHENTICATE_USER, GET_ASESORES_SUCCESS, GET_PRIVACY_POLICY_SUCCESS, GET_TERMS_CONDITION_SUCCESS,
  INIT_URL, REGISTER_EMAIL_PASS_SUCCESS,
  UNAUTHENTICATE_USER,
  GET_CONTRACT_CONTENT_SUCCESS
} from "../actionTypes";
import DownloadAPI from "../../api/DownloadAPI";


export function authenticate(token, isRemember) {
  return async (dispatch) => {
    const userApi = new UserAPI();
    dispatch(loading('authUser'));
    try {
      const response = await userApi.logIn(token);
      console.log({ response });
      const { success, message, access_token, token_type, profile_status } = response.data;
      if (success) {
        dispatch({
          type: AUTHENTICATE_USER,
          user: {
            token: access_token,
            token_type,
            isRemember,
            isAuth: true,
            profile_status
          },
        });
      }
      else {
        toast.error(message);
      }
    }

    catch (e) {
      console.log({ LoginError: e })
      toast.error('Error en la API');
    }

    finally {
      dispatch(loaded('authUser'));
    }
  };
}

export function unauthenticate() {
  return {
    type: UNAUTHENTICATE_USER,
  };
}

export const setInitUrl = (url) => {
  return {
    type: INIT_URL,
    payload: url
  };
};

export function getAsesoresAction() {
  return async (dispatch) => {
    const userApi = new UserAPI();
    dispatch(loading('authUser'));
    try {
      const response = await userApi.getAsesorItems();
      console.log({ response });
      const { success, message, result } = response.data;
      if (success) {
        dispatch({
          type: GET_ASESORES_SUCCESS,
          payload: result
        });
      }
      else {
        toast.error(message.error);
      }
    }

    catch (e) {
      console.log({ LoginError: e });
      toast.error('Error en la API');
    }

    finally {
      dispatch(loaded('authUser'));
    }
  };
}
export function registerWithEmailPassAction(body) {
  return async (dispatch) => {
    const userApi = new UserAPI();
    dispatch(loading('authUser'));
    try {
      const response = await userApi.registerWithEmailPass(body);
      console.log({ response });
      const { success, message, access_token, token_type, profile_status } = response.data;
      if (success) {
        dispatch({
          type: REGISTER_EMAIL_PASS_SUCCESS,
          user: {
            token: access_token,
            token_type,
            isAuth: true,
            profile_status
          },
        });
      }
      else {
        toast.error(message.error);
      }
    }

    catch (e) {
      console.log({ LoginError: e });
      toast.error('Error en la API');
    }

    finally {
      dispatch(loaded('authUser'));
    }
  };

}

export function getTermsConditionContentAction() {
  return async (dispatch) => {
    const userAPI = new UserAPI();
    dispatch(loading('authUser'));
    try {
      const response = await userAPI.getTermsConditionContent();
      const { result, success, message } = response.data;
      if (success) {
        dispatch({
          type: GET_TERMS_CONDITION_SUCCESS,
          payload: result
        });
      } else {
        toast.error(message.error);
      }
    } catch (error) {
      console.log({ getTermsConditionContentError: error });
      toast.error('Error en la API');
    }
    finally {
      dispatch(loaded('authUser'));
    }
  }
}

export function getPrivacyPolicyContentAction() {
  return async (dispatch) => {
    const userAPI = new UserAPI();
    dispatch(loading(''));
    try {
      const res = await userAPI.getPrivacyPolicyContent();
      const { result, message, success } = res.data;
      if (success) {
        dispatch({
          type: GET_PRIVACY_POLICY_SUCCESS,
          payload: result
        })
      } else {
        toast.error(message.error)
      }
    } catch (error) {
      console.log({ getPrivacyPolicyContentActionError: error });
      toast.error('Error en la API');
    }
    finally {
      dispatch(loaded(''));
    }
  }
}

export function getContractContentAction() {
  return async (dispatch) => {
    const userAPI = new UserAPI();
    dispatch(loading(''));
    try {
      const res = await userAPI.getContractContent();
      const { success, result, message } = res.data;
      if (success) {
        dispatch({
          type: GET_CONTRACT_CONTENT_SUCCESS,
          payload: result
        });
      } else {
        toast.error(message.error);
      }
    } catch (error) {
      console.log({ getContractContentError: error });
      if (error.response && error.response.status === 401) {
        toast.error('You need to sign in again.');
        dispatch(unauthenticate());
        return;
      }
      toast.error('Error en la API');
    }
    finally {
      dispatch(loaded(''));
    }
  }
}

export function downloadContractAction() {
  return async (dispatch) => {
    const downloadAPI = new DownloadAPI();
    dispatch(loading(''));
    try {
      const url = 'https://crm.treebes2.com/api/profile/contract/pdf';
      const response = await downloadAPI.downloadPDF(url);
      console.log({ downloadContract: response});
      const { status, data } = response;
      if (status === 200) {
        FileSaver.saveAs(data, "contract.pdf");
      }
      else {
        toast.error("Fail to download. Try please later");
      }
    }

    catch (e) {
      console.log({ downloadContractAction: e });
      if (e.response && e.response.status === 401) {
        toast.error('You need to sign in again.');
        dispatch(unauthenticate());
        return;
      }
      toast.error('Error en la API');
    }

    finally {
      dispatch(loaded(''));
    }
  };
}

export function submitContractAction(password) {
  return async (dispatch) => {
    const userApi = new UserAPI();
    const body = { password };
    dispatch(loading(''));
    try {
      const response = await userApi.submitContract(body);
      const { success, message } = response.data;
      if (!success) {
        toast.error(message.error)
      } else {
        toast.success(message.success)
      }
    } catch (e) {
      console.log({ downloadContractAction: e });
      if (e.response && e.response.status === 401) {
        toast.error('You need to sign in again.');
        dispatch(unauthenticate());
        return;
      }
      toast.error('Error en la API');
    }
    finally {
      dispatch(loaded(''));
    }
  }
}
