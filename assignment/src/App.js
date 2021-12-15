import {Switch,Route,BrowserRouter} from 'react-router-dom'
import FormData from './components/FormData'
import Form from './components/Form'
import context from './context/listContext';

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
  <context.Provider
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
    </context.Provider>

    
)}
export default App;
