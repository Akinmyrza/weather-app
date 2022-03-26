// export const GET_WEATHER = 'GET_WEATHER';
// export const SET_LOADING = 'SET_LOADING';
// export const SET_ERROR = 'SET_ERROR';
// export const SET_ALERT = 'SET_ALERT';

export enum GetWeatherActionTypes {
  GET_WEATHER__REQUEST = 'GET_WEATHER_REQUEST',
  SET_LOADING = 'SET_LOADING',
  SET_ERROR = 'SET_ERROR',
  SET_ALERT = 'SET_ALERT',
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_min: number;
    temp_max: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    message: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    deg: number;
    speed: number;
  };
}

export interface WeatherError {
  cod: string;
  message: string;
}

export interface WeatherState {
  data: WeatherData | null;
  loading: boolean;
  error: string;
}

export interface GetWeatherRequest {
  type: GetWeatherActionTypes.GET_WEATHER__REQUEST;
  weatherData: WeatherData;
}

export interface SetLoading {
  type: GetWeatherActionTypes.SET_LOADING;
}

export interface SetError {
  type: GetWeatherActionTypes.SET_ERROR;
  error: string;
}

export type WeatherAction = GetWeatherRequest | SetLoading | SetError;

export interface SetAlert {
  type: GetWeatherActionTypes.SET_ALERT;
  alert: string;
}

export interface AlertState {
  message: string;
}
