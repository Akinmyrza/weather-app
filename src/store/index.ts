/* External dependencies */
import {
  applyMiddleware,
  combineReducers,
  createStore as createReduxStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

/* Local dependencies */
import alertReducer from './reducers/alertReducer';
import weatherReducer from './reducers/weatherReducer';

const rootReducer = combineReducers({
  alert: alertReducer,
  weather: weatherReducer,
});

let store;

export function createStore() {
  store = createReduxStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
