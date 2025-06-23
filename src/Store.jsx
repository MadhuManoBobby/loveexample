import {configureStore} from '@reduxjs/toolkit'
import customerReducer from './Features/CustomerSlice'

export const Store = configureStore({
    reducer:{
        customers: customerReducer
    }
})