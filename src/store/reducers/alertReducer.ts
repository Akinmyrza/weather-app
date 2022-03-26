/* Local dependencies */
import { AlertState, GetWeatherActionTypes, SetAlert } from '../types';

const initialState: AlertState = {
  message: '',
};

export default (state = initialState, action: SetAlert): AlertState => {
  switch (action.type) {
    case GetWeatherActionTypes.SET_ALERT:
      return {
        message: action.alert,
      };
    default:
      return state;
  }
};
