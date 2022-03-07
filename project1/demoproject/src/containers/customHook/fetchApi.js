import  { useState, useEffect } from 'react';
import axios from 'axios';


const FetchApi = (url) => {

    const [ loader, setLoader] = useState(true)
    const [ApiData, setApiData] = useState([])
    
    useEffect(() => {
        const getName = async () => {
          const resp=await axios.get(url)
          setTimeout(
            () => 
            (setApiData(resp.data),
            setLoader(false)),
            2000
          );
         };
        getName()
    },[url])

  return {ApiData,loader}
  
}

export default FetchApi;

