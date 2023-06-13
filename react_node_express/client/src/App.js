

import {useEffect,useState} from 'react'

const App=()=>{
  const [data,setData]=useState([])

  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(data => setData([...data]))
      .catch(error => console.error('Error:', error));
  }, []);

  return(
    <div>
      <h1>Rest Api</h1>
      <ul>
        {data.map(each=>(
          <li key={each.id}>{each.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App;
