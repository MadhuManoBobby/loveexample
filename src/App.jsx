import React from 'react'
import './App.css'
import { AddCustomer } from './AddCustomer'
import { ViewCustomer } from './ViewCustomer'


function App() {
  return (
    <>
      <h1>Welcome to React-Redux</h1>
      <AddCustomer/>
      <ViewCustomer/>
    </>
  )
}

export default App
