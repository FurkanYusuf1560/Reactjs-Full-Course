import React from 'react'
import ManageCounter from './counter-app/manage-counter'
import CounterValue from './counter-app/counter-value'
import Products from './products'

const App = () => {
  return (
    <div>
      Zustand App
      <div style={{display : 'flex', flexDirection : 'column', width: '250px'}}>
        <ManageCounter/>
        <CounterValue/>
        <Products/>
      </div>
      
    </div>
  )
}

export default App
