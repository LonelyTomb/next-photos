import {createSlice} from '@reduxjs/toolkit'
import {ProductThunks, Utils} from '@/redux/thunks'

const {errorMessage, loadingState} = Utils;
const {getProducts} = ProductThunks
export const productSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        products: [],
    },
    reducers: {
        saveProducts(state, action) {
            state.products = [...action.payload]
        }
    },
    extraReducers: {
        [getProducts.pending]: (state) => {
            loadingState(state, true);
            errorMessage(state, null);
        },
        [getProducts.fulfilled]: (state, action) => {
            loadingState(state, false);
            errorMessage(state, null);
            state.products = {...action.payload};
        },
        [getProducts.rejected]: (state, action) => {
            loadingState(state, false);
            errorMessage(state, action.payload);
        },
    }
})

export const {saveProducts} = productSlice.actions;

export default productSlice.reducer;