import {createSlice} from '@reduxjs/toolkit';
// import axios from 'axios';
//  export const STATUSES=Object.freeze({
//     IDLE:'idle',
//     ERROR:'error',
//     LOADING:'loading',
// });

const catItems= localStorage.getItem('category')!==null? JSON.parse(localStorage.getItem('category')):[];

const tableItems= localStorage.getItem('table')!==null? JSON.parse(localStorage.getItem('table')):[];

const initialState={
   form:catItems,
   tableData:tableItems,
   testingData:[],
   catData:[],
   indexData:[],
//    routes:false, 
//    status:STATUSES.IDLE
};

const ContactSlice=createSlice({
    name:'Contact',
    initialState,
    reducers:{
        setContact:(state, action)=>{
           state.form=[...state.form,action.payload];
           localStorage.setItem('category', JSON.stringify(state.form.map((item)=>item)));
        },
       
        setTable:(state, action)=>{
            state.tableData=[...state.tableData,action.payload];
            localStorage.setItem('table', JSON.stringify(state.tableData.map((item)=>item)));
            
        },

        dymanicCategory:(state, action)=>{
          state.catData= action.payload
        },

        setCategoryData:(state, action)=>{
         state.testingData= state.tableData.filter((data)=>data.category===action.payload)
        },
        
        setCategoryIndexData:(state, action)=>{
         state.indexData= state.tableData.filter((data)=>data.category==="sports")
        },
        

        // setStatus:(state, action)=>{
        //     state.status= action.payload
        // },

    }
    
})


export const {setContact, setTable, setCategoryData, dymanicCategory, setCategoryIndexData}= ContactSlice.actions;
export default ContactSlice.reducer;


// Thunks

// export function fetchProducts(){
//     return async function fetchProductThunk(dispatch, getState){
//         dispatch(setStatus(STATUSES.LOADING));
//         try {
//             const res= await axios.get('https://fakestoreapi.com/products');
//             dispatch(setProducts(res.data))
//             dispatch(setStatus(STATUSES.IDLE))
//         } catch (error) {
//             console.log(error);
//             dispatch(setStatus(STATUSES.ERROR))
//         }
//     }
// }


// // https://api.pujakaitem.com/api/products
