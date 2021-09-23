import {createAsyncThunk} from "@reduxjs/toolkit"
import {dbRef} from '@/api'
import {onValue} from 'firebase/database'

const getProducts = createAsyncThunk('product/getProducts', async (payload, {rejectWithValue}) => {
    let products = []
    try {
        await onValue(dbRef('products/'), async (snapshot) => {
            const res = await snapshot.val()
            products = [...res]
        });
        return products
    } catch (err) {
        return rejectWithValue(err.response.data);
    }
})

const ProductThunks = {getProducts}

export default ProductThunks