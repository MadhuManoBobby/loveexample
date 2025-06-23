import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCustomer } from './Features/CustomerSlice'

export const ViewCustomer = () => {
    const dispatch = useDispatch()
   const customers = useSelector((state) => state.customers)

   const deleteCustomer = (index) => {
        dispatch(removeCustomer(index))
   }
  return (
    <div>
        <h1>List Of Customers</h1>
        <ul style={{listStyle:'none',fontFamily:'cursive',fontSize:'1.5em',border:'2px double wheat'}}>
            {customers.map((customer,index) => <li>{customer} <button onClick={() => deleteCustomer(index)}>Delete</button> </li>)}
        </ul>
    </div>
  )
}
