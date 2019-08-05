import { FETCH_TIMBRADO, SAVE_TIMBRADO } from '../actions/TimbrarActions';

const getDefaultState = () => ({
  crmid: '',
  rs_receptor: '',
  rfc_receptor: '',
  def: {},
  usocfdi: [],
  formaspago: [],
  metodospago: [],
  tc: 0,
  confirma: {},
});

export default function (state = getDefaultState(), action) {
  const { type } = action;
  switch (type) {
    case FETCH_TIMBRADO:
      return { ...state, ...action.response };
    case SAVE_TIMBRADO:
      return { ...state, ...getDefaultState() };
    default:
      return state;
  }
}
