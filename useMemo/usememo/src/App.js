import React, {useState, useMemo} from 'react';
import { VscGlobe } from "react-icons/vsc";
import { CgLink } from "react-icons/cg";


import './App.css'

function App() {
  const [websiteName, setWebsiteName] = useState('');
  const [websiteUrl, setWebsiteURL] = useState('')
  const [list, setList] = useState([])


  let memoizedValue = useMemo(() => list , [list]);
  console.log(memoizedValue)

  const add = () =>{
    if (websiteName !=="" && websiteUrl !== ""){
      const data = {
        websiteName,
        websiteUrl
      }
      setList((p)=>[...p, data])
      setWebsiteName("")
      setWebsiteURL("")
    }
  }
  
  return (
    <div className='Container'>

      <div className="container1">

        <div className="container2">
          <p className="new">Add New Website</p>
          <div className='inputpart'>

          <div className='row'>          
          <div className='inputContainer'>
            <VscGlobe className='icon'/>
            <input type="text" className='inputname' placeholder='Enter Website' onChange={(e)=>setWebsiteName(e.target.value)} value={websiteName}/>   
          </div>
          <p></p>     
          </div> 
          <div>          
          <div className='inputContainer'>
            <CgLink className='icon'/>
            <input type="url" className='inputname' placeholder='Enter Website URL' onChange={(e)=>setWebsiteURL(e.target.value)} value={websiteUrl}/>      
          </div>
          <p></p>  
          </div>
          </div>    

          <div className='AddContainer'>
            <button className='Add' onClick={add}>Add</button>
          </div>
        </div>

        <div>
          <img src='https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png' alt='Website' className='image'/>
        </div>
      </div>

      {
        memoizedValue.length !== 0 ? memoizedValue.map((each,index)=> {
          return(
          <div className="ocontainer1" key={index}>
              <div className='ocontainer2'>
                <p className='logo'>{each.websiteName[0]}</p>
                <div>
                  <p className='owebsite'>{each.websiteName}</p>
                  <p className='owebsite'>{each.websiteUrl}</p>
                </div>
              </div>
            </div>)
        }) : null
      }   
      </div>      
  )
}

export default App

