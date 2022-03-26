/* External dependencies */
import { ThunkAction } from 'redux-thunk';

/* Local dependencies */
import { RootState } from '..';
import {
  GetWeatherActionTypes,
  WeatherAction,
  WeatherData,
  WeatherError,
} from '../types';

export function getWeather(
  city: string
): ThunkAction<void, RootState, null, WeatherAction> {
  return async (dispatch) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_API_KEY}`
      );

      if (!res.ok) {
        const resData: WeatherError = await res.json();
        throw new Error(resData.message);
      }

      const resData: WeatherData = await res.json();
      dispatch({
        type: GetWeatherActionTypes.GET_WEATHER__REQUEST,
        weatherData: resData,
      });
    } catch (err) {
      dispatch({
        type: GetWeatherActionTypes.SET_ERROR,
        error: 'Error',
      });
    }
  };
}

export function setLoading(): WeatherAction {
  return {
    type: GetWeatherActionTypes.SET_LOADING,
  };
}

export function setError(): WeatherAction {
  return {
    type: GetWeatherActionTypes.SET_ERROR,
    error: '',
  };
}
