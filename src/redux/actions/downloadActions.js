/* eslint-disable camelcase */
import { toast } from 'react-toastify';
import { loading, loaded } from './loadActions';
import {
  GET_DOWNLOAD_SUCCESS,
} from "../actionTypes";
import DownloadAPI from "../../api/DownloadAPI";

export function fetchDownloadList() {
  return async (dispatch) => {
    const downloadAPI = new DownloadAPI();
    dispatch(loading(''));
    try {
      const response = await downloadAPI.getDownloads();
      console.log({ response });
      const { success, message, result } = response.data;
      if (success) {
        dispatch({
          type: GET_DOWNLOAD_SUCCESS,
          payload: result
        });
      }
      else {
        toast.error(message);
      }
    }

    catch(e) {
      console.log({getDownloadListError: e})
      toast.error('Error en la API');
    }

    finally {
      dispatch(loaded('authUser'));
    }
  };
}

