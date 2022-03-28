import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [imgFile, setImgFile] = useState('')
  const[imgName, setImgName] = useState('')
  const [pathUrl, setPathUrl] = useState('')

  const onClickButton = (e) => {
    const file = e.target.files[0]
    setImgFile(file)
    setImgName(file.name)
  }
  const onHandlerSubmit = async(e) => {
    e.preventDefault()
    const details = new FormData()
    details.append('file', imgFile)
    details.append('name', imgName)

    try{
      const response = await axios.post('http://localhost:8000/upload/single', details)
      setPathUrl(response.data.path)
    }
    catch(error){
      console.log(error.message)
    }
  }

  console.log(pathUrl)

  return (
    <div className="App">
      <div>
        <form onSubmit={onHandlerSubmit}>
          <input type="file" onChange={onClickButton}/>
          <button type="submit">submit</button>
        </form>
      </div>
      <h1>Hello World</h1>
      <img src={`http://localhost:8000/${pathUrl}`} alt="name" className="imageHeight"/>
    </div>
  );
}

export default App;
