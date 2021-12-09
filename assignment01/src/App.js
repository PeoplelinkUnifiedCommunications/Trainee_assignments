import {Component} from 'react'
import Form from './components/Form'
import FormData from './components/FormData'
import './App.css';

class App extends Component{
  state={formData:[]}

  addFormData=(data)=>{
    const {formData} = this.state
    const updatedData = [...formData,data]
    this.setState({formData:updatedData})
  } 

  render(){
    const {formData} = this.state
    //console.log(formData)
    const length = formData.length
    return(
      <div className="app-container">
        <div className="app-content">
          <Form addFormData={this.addFormData} formData={formData}/>
          {length===0?null:
          <div className="form-data-container">
            <ul className="list-container">
              <div className="list-content">
              <li className="name-list-item list-heading-item">Name</li>
              <li className="email-list-item list-heading-item">Email</li>
              <li className="age-list-item list-heading-item">Age</li>
              </div>
              {formData.map((eachData)=>(<FormData data={eachData} key={eachData.id}/>))}
            </ul>
             
          </div>}
        </div>
        
      </div>
    )
  }
}

export default App;
