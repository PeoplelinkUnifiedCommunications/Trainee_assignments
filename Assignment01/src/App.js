import { Routes, Route} from "react-router-dom"
import EnterUserDetailsForm from "./components/EnterUserDetailsForm"

import "./App.css"



const MyApp = () => {
  return(
    <div className="my-app-container">
      <Routes>
        <Route exact path="/" element={ViewUserDetails}/>
        <Route exact path="/form" caseSensitive={true} element={<EnterUserDetailsForm />}/>
      </Routes>
    </div>
  )
}

export default MyApp; 