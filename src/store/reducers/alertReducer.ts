/* Local dependencies */
import { AlertState, GetWeatherActionTypes, SetAlert } from '../types';

const initialState: AlertState = {
  message: '',
};

export default function alertReducer(state = initialState, action: SetAlert) {
  switch (action.type) {
    case GetWeatherActionTypes.SET_ALERT:
      return {
        message: action.alert,
      };
    default:
      return state;
  }
}
