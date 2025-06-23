import {createSlice} from '@reduxjs/toolkit'

const initialState = []

const CustomerSlice = createSlice({
    name:'customer',
    initialState,
    reducers:{
        addCustomer(state,action){
            state.push(action.payload)
        },
        removeCustomer(state,action){
           const deleteIndex = action.payload
           return state.filter((va,index) => deleteIndex !== index);
        }
    }
})
export const {addCustomer,removeCustomer} = CustomerSlice.actions
export default CustomerSlice.reducer
