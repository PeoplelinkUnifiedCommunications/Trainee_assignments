import { useState, useEffect } from 'react';
import axios from 'axios';

const HookApiCalls = (url) => {
    const [ApiData, setApiData] = useState([])
    const [loader,setLoader]=useState(true)
    const [error,setError]=useState(null)
    useEffect(() => {
      const getName = async () => {
        try{
        const resp=await axios.get(url)
        setTimeout(
          () => (setApiData(resp.data),
            setLoader(false)),
          500
        );
        }catch(error){
          setError(error.message)
          // setTimeout(
          //   () => (setError(error.message)),
          //   500
          // );
        } 
      };
      getName()
    },[url])

  return {ApiData,loader,error}
  
}

export default HookApiCalls;