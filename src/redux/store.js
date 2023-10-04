import {configureStore} from '@reduxjs/toolkit';
import monitorReducerEnhancer from './enhancers/monitorReducers';
import rootReducers from './reducers';

export default function configureAppStore(preloadedState = {}) {
  const enhancers = [monitorReducerEnhancer];
  return configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    preloadedState,
    enhancers,
  });
}
