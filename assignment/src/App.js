import {Switch,Route,BrowserRouter} from 'react-router-dom'
import FormData from './components/FormData'
import Form from './components/Form'
import CartContext from './context/cartContext';

import './App.css';
import { useState } from 'react';

const App = () => {
  const [dataList,setDataList] = useState([])


  const onSubmitForm =(newData) =>{
    if (dataList.length === 0){
      setDataList([newData])
    }else{
      const updatedData = [...dataList,newData]
      setDataList(updatedData)
    }
  }

  return(
  <CartContext.Provider
    value ={{
      dataList,
      onSubmitForm: onSubmitForm
    }}>
    <>
    <BrowserRouter>
        <Switch>
          <Route exact path="/" component={FormData}/>
          <Route exact path="/form" component={Form}/>
        </Switch>
      </BrowserRouter>
    </>
    </CartContext.Provider>

    
)}
export default App;
