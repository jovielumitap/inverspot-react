import { toast } from 'react-toastify';

import TimbrarApi from '../../api/TimbrarApi';
import { openModal, closeModal } from './modalActions';
import { loading, loaded } from './loadActions';

export const FETCH_TIMBRADO = 'FETCH_TIMBRADO';
export const SAVE_TIMBRADO = 'SAVE_TIMBRADO';

const ID = 'timbrar';
export const fetchTimbrado = crmid => (
  async (dispatch) => {
    dispatch(openModal(ID));
    dispatch(loading(ID));
    const timbrarApi = new TimbrarApi();
    const response = await timbrarApi.get(crmid);
    const { datos } = response;
    dispatch({
      type: FETCH_TIMBRADO,
      response: { ...datos, crmid },
    });
    dispatch(loaded(ID));
  }
);

export const saveTimbrado = timbre => (
  async (dispatch) => {
    dispatch(loading(ID));
    const timbrarApi = new TimbrarApi();
    const response = await timbrarApi.save(timbre);
    const { success } = response;

    if (success === 'OK') {
      toast.success('Timbrado Exitoso');
    }

    else {
      toast.success('Error Al Timbrar');
    }

    dispatch({ type: SAVE_TIMBRADO });
    dispatch(loaded(ID));
    dispatch(closeModal(ID));
  }
);
