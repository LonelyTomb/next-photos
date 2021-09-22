import {combineReducers} from '@reduxjs/toolkit';
import productsReducer from '@/redux/slices/products';

const appReducers = combineReducers({
  products: productsReducer,
});
const rootReducers = (state, action) => {
  if (action.type === 'RESET_APP') {
    const {loading} = state;
    state = {loading};
  }

  return appReducers(state, action);
};
export default rootReducers;
