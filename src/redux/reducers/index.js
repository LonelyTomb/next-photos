import {combineReducers} from '@reduxjs/toolkit';
import productsReducer from '@/redux/slices/products';
import cartReducer from '@/redux/slices/cart';

const appReducers = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});
const rootReducers = (state, action) => {
  if (action.type === 'RESET_APP') {
    const {loading} = state;
    state = {loading};
  }

  return appReducers(state, action);
};
export default rootReducers;
