/* eslint-disable no-underscore-dangle */
import {
  ADD_CLIENTS
} from '../actions/clientActions';

const defaultState = () => ({
  clients: null,
});

const addClients = (state, clients) => ({
  ...state,
  clients,
});

export default function (state = defaultState(), action) {
  const { type } = action;
  switch (type) {
    case ADD_CLIENTS:
      return addClients(state, action.clients);
    default:
      return state;
  }
}
