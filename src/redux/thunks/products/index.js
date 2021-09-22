import {createAsyncThunk} from "@reduxjs/toolkit"
import {dbRef} from '@/api'
import {onValue} from 'firebase/database'

const getProducts = createAsyncThunk('product/getProducts', async (payload, {rejectWithValue}) => {
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