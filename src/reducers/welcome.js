/* eslint-disable new-cap */
import { Map, fromJS } from 'immutable';
import { FETCH_WELCOME_MESSAGE } from '../actions/welcome';

const immutableState = Map({
  message : 'welcome to rn-profile app',
});

export default function reducer (state = immutableState, action) {
  switch (action.type) {
  case FETCH_WELCOME_MESSAGE:
    return fromJS(action.payload);
  default:
    return state;
  }
}
