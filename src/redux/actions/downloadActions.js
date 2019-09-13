/* eslint-disable camelcase */
import { toast } from 'react-toastify';
import { loading, loaded } from './loadActions';
import {
  GET_DOWNLOAD_SUCCESS,
} from "../actionTypes";
import DownloadAPI from "../../api/DownloadAPI";
import {unauthenticate} from "./authUserActions";
import FileSaver from 'file-saver';

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
      console.log({getDownloadListError: e});
      if (e.response && e.response.status === 401) {
        toast.error('You need to sign in again.');
        dispatch(unauthenticate());
        return;
      }
      toast.error('Error en la API');
    }

    finally {
      dispatch(loaded('authUser'));
    }
  };
}

export function requestDownloadPDFInvoice(id, downloadUrl) {
  return async (dispatch) => {
    const downloadAPI = new DownloadAPI();
    dispatch(loading(''));
    try {
      const response = await downloadAPI.downloadPDF(downloadUrl);
      console.log({ response });
      const { status, data } = response;
      if (status === 200) {
        FileSaver.saveAs(data, id + ".pdf");
      }
      else {
        toast.error("Fail to download. Try please later");
      }
    }

    catch(e) {
      console.log({getDownloadPdfError: e});
      if (e.response && e.response.status === 401) {
        toast.error('You need to sign in again.');
        dispatch(unauthenticate());
        return;
      }
      toast.error('Error en la API');
    }

    finally {
      dispatch(loaded('authUser'));
    }
  };
}

