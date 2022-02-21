import React, {useState} from 'react'
import './App.css'

function App() {
  const [amount, setAmount] = useState(2000)

  return (
    <div className="container">
      <div className='withdraw'>
        <p className='name'><span className='icon'>K</span>Krishna</p>
        <div className='amountContainer'>
          <p className='balance'>Your Balance</p>
          <div>
            <p className='amount1'>{amount}</p>
            <p className="balance">In Rupees</p>              
          </div>
        </div>
        <div>
          <h1 className='amount'>Withdraw</h1>
          <p className="balance">CHOOSE SUM(IN RUPEES)</p>
          <div className='buttons'>
            <button className='money' onClick={()=>{setAmount(amount-50)}}>50</button>
            <button className='money' onClick={()=>{setAmount(amount-100)}}>100</button>
            <button className='money' onClick={()=>{setAmount(amount-200)}}>200</button>
            <button className='money' onClick={()=>{setAmount(amount-500)}}>500</button>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default App
