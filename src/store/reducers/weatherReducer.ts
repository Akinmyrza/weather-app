/* Local dependencies */
import { GetWeatherActionTypes, WeatherAction, WeatherState } from '../types';

export const initialState: WeatherState = {
  data: null,
  loading: false,
  error: '',
};

export default function weatherReducer(
  state = initialState,
  action: WeatherAction
) {
  switch (action.type) {
    case GetWeatherActionTypes.GET_WEATHER__REQUEST:
      return {
        data: action.weatherData,
        loading: false,
        error: '',
      };
    case GetWeatherActionTypes.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GetWeatherActionTypes.SET_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
