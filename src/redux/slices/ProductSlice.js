import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
 export const STATUSES=Object.freeze({
    IDLE:'idle',
    ERROR:'error',
    LOADING:'loading',
});
const initialState={
   data:[],
   routes:false, 
   status:STATUSES.IDLE
};

const ProductSlice=createSlice({
    name:'Product',
    initialState,
    reducers:{
        setProducts:(state, action)=>{
           state.data=action.payload
        },

        setRoute:(state)=>{
            state.routes=true;
        },

        setStatus:(state, action)=>{
            state.status= action.payload
        },

      
    }
})


export const {setProducts, setRoute, setStatus}= ProductSlice.actions;
export default ProductSlice.reducer;


// Thunks

export function fetchProducts(){
    return async function fetchProductThunk(dispatch, getState){
        dispatch(setStatus(STATUSES.LOADING));
        try {
            const res= await axios.get('https://fakestoreapi.com/products');
            dispatch(setProducts(res.data))
            dispatch(setStatus(STATUSES.IDLE))
        } catch (error) {
            console.log(error);
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}


// https://api.pujakaitem.com/api/products
