import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'
import { FAILDED, IDLE, LOADING, SUCCES } from "./status";

 export const productsAsync = createAsyncThunk('products/productsAsync', async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
})


const productslice = createSlice({
    name:"products",
    initialState:{
        status: IDLE,
        products: [
           
          ]

    },
    reducers: {
        viewProducts: (state,actions) => {
            return state;
        }
        
    },
    extraReducers: builder => {
        builder
            .addCase(productsAsync.pending,(state, action ) => {
               state.status = LOADING;
            })
            .addCase(productsAsync.fulfilled, (state, action) => {
                state.status = SUCCES;
                state.products.push(...action.payload);
                
            })
            .addCase(productsAsync.rejected, (state, action) => {
                state.status = FAILDED;
            })
    }
});

export const {viewProducts} = productslice.actions;
const {reducer: productreducer } = productslice;
export default productreducer;