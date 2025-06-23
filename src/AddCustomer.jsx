import React, { useEffect, useRef, useState } from 'react'
import { ViewCustomer } from './ViewCustomer'
import { addCustomer as addCustomerAction } from './Features/CustomerSlice'
import { useDispatch } from 'react-redux'

export const AddCustomer = () => {
    const [input,setInput] = useState('')
    const inputFocus = useRef(null)
    // const[customers,setCustomers] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        inputFocus.current.focus()
    })

    const addCustomer = () => {
        if(input){
            dispatch(addCustomerAction(input))
            // setCustomers((preCustomer) => [...preCustomer,input])            
            setInput('')
        }
    }
  return (
    <>
        <div>
            <input type="text" ref={inputFocus} value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={addCustomer}>Add</button>
        </div>
        {/* <ViewCustomer customers={customers}/> */}
    </>
  )
}
