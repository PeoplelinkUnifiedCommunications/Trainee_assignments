
import { Routes, Route} from "react-router-dom";
import UserDetails from './components/UserDetails'
import Form from './components/Form'
import {useState} from 'react'
import context from './context/listContext';
import './App.css';

function App(){
    const [dataList,setDataList] = useState([])


    const onSubmitForm =(newData) =>{
      if (dataList.length === 0){
        setDataList([newData])
      }else{
        const updatedData = [...dataList,newData]
        setDataList(updatedData)
      }
    }

    return (
        <context.Provider
    value ={{
      dataList,
      onSubmitForm: onSubmitForm
    }}>
     <Routes>
        <Route exact path="/" element={<UserDetails/>}/>
        <Route exact path="/form" element={<Form/>}/>
     </Routes> 
     </context.Provider> 
    )
 
}
export default App;
