import {createSlice} from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'products',
    initialState: {
        show: false,
        items: []
    },
    reducers: {
        toggleCart(state, action) {
            state.show = action.payload
        },
        clearCart(state, action) {
            state.items = []
        },
        addToCart(state, action) {
            state.items = [...state.items, action.payload]
        }
    },
    extraReducers: {}
})

export const {
    toggleCart,
    clearCart,
    addToCart
} = cartSlice.actions;

export default cartSlice.reducer;