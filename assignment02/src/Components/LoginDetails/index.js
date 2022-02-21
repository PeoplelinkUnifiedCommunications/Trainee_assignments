import {Component} from "react"
import Listitems from "../Listitems"
import {v4} from 'uuid'
import './index.css'

class LoginDetails extends Component{
  state = {
    name : "",
    email: "",
    dob:"",
    listitem:[],
    blur:false
  }

  onChangename = event =>{
    this.setState({name:event.target.value})
  }

  onChangeemail = event =>{
    this.setState({email:event.target.value})
  }

  onChangedob = event =>{
    this.setState({dob:event.target.value})
  }


  addDetails = event =>{
    event.preventDefault()
    const {name, email, dob, } = this.state
    const dob1 = new Date(dob)
    const by = dob1.getFullYear()
    const pdob = new Date()
    const py = pdob.getFullYear()
    const age = py-by
    const newdetails = {
      id :v4(),
      name:name,
      email:email,
      age:age,
    }
    if(name === "" || email === "" || dob === ""){
      this.setState({blur:true})
    }else{
      this.setState(prevState=>({
        listitem:[...prevState.listitem, newdetails],
        name:"",
        email:"",
        dob:"",
        blur:false}))
    }
  }
  render(){
    const {name, email, dob, listitem, blur} = this.state

    let errorMsg;
    if(blur){
      errorMsg=<p className='errorMsg'>Fileds Required</p>
    }else{
      errorMsg=""
    }

    return(
      <div className="DetailsContainer">        
        <div className="rowContainer">
          <form type="submit" className="formContainer" onSubmit={this.addDetails}>  
          <h1>Login Page</h1>          
            <label htmlFor="Name" className="name">      
              Name : <br/>
              <input id="Name" type="text" className="boxsize" placeholder="Enter the Name" onChange={this.onChangename} value={name}/>
            </label>  
            <br/>
            <label htmlFor="Email" className="email">
              Email : <br/>
              <input id="Email" type="email" className="boxsize" placeholder="Enter the Email" onChange={this.onChangeemail} value={email}/>
            </label>
            <br/>            
            <label htmlFor="DateofBirth" className="dob">
              DOB : <br/>
              <input id="DateofBirth" type="date" className="boxsize" onChange={this.onChangedob} value={dob}/>
            </label><br/>
            <button type="submit" >submit</button>
            {errorMsg}
          </form>

         
           <ul class="listContainer">
             {listitem.map((each) =>(<Listitems  eachlist={each} key={each.id}/>))}
           </ul>
        
        </div>
      </div>
    )
  }  
}

export default LoginDetails