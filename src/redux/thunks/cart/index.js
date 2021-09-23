import {createAsyncThunk} from "@reduxjs/toolkit"

const toggleCart = createAsyncThunk('cart/toggleCart', async (payload, {rejectWithValue}) => {
    try {
       const products =  onValue(dbRef('products/'), async (snapshot) => {
           return await snapshot.val()
        });
       console.log(products)
       return products
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
})

const ProductThunks = { getProducts }

export default ProductThunks