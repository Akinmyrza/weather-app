/* Local dependencies */
import { GetWeatherActionTypes, SetAlert } from '../types';

export const setAlert = (message: string): SetAlert => {
  return {
    type: GetWeatherActionTypes.SET_ALERT,
    alert: message,
  };
};
