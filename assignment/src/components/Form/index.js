import {useState,useContext} from 'react'
import {v4} from 'uuid'
import {Link} from 'react-router-dom'
import {format} from 'date-fns'

import './index.css'
import context from '../../context/listContext'
import {
  validateEmail,
  validateCharecters, validateDob
} from '../../context/validateEmail'

const Form = props => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [error, setError] = useState({})
  const contextValues = useContext(context)

  const maxDate = format(new Date(),"yyyy-MM-dd")

  const validate = dataList => {
    const errorObject = {}
    let retValue = true
    const dateArray = (date.split("-"))
    const reversedDate = (dateArray.reverse())
    const newDate = (reversedDate.join('/'))
    const isEmailExists = dataList.find(eachData => eachData.email === email)
    if (name === '') {
      errorObject.nameError = 'Please Enter The Name'
      retValue = false
    } else if (!validateCharecters(name)) {
      errorObject.nameError = 'Please Enter The Valid Name'
      retValue = false
    }
    if (email === '') {
      errorObject.emailError = 'Please Enter The Email'
      retValue = false
    } else if (!validateEmail(email)) {
      errorObject.emailError = 'Please Enter The Valid Email'
      retValue = false
    } else if (isEmailExists) {
      errorObject.emailError = 'Email Already Exist'
      retValue = false
    }
    if (date === '') {
      errorObject.dobError = 'Please Enter The Data Of Birth'
      retValue = false
    } else if (!validateDob(newDate)) {
      errorObject.dobError = 'Please Enter The Valid Data Of Birth'
      retValue = false
    }
    setError(errorObject)
    return retValue
  }

  const onSubmit = event => {
    event.preventDefault()
    const {dataList,onSubmitForm} = contextValues
    if (validate(dataList)) {
      const newFormData = {
        id: v4(),
        name,
        email,
        date,
      }
      setName('')
      setEmail('')
      setDate('')
      onSubmitForm(newFormData)
      const {history} = props
      history.replace('/')
    }
  }

  return (
          <div className="main-container">
            <div className="sub-container">
              <div className="form-container">
                <form className="form" onSubmit={onSubmit}>
                  <h1 className="heading">DATA FORM</h1>
                  <div className="input-container">
                    <label className="input-label" htmlFor="name">
                      NAME <span className="star-symbol">*</span>
                    </label>
                    <input
                      className="input-field"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      placeholder="Enter your name"
                      id="name"
                    />
                    {error.nameError && (
                      <p className="error-msg">{error.nameError}</p>
                    )}
                  </div>
                  <div className="input-container">
                    <label className="input-label" htmlFor="email">
                      EMAIL <span className="star-symbol">*</span>
                    </label>
                    <input
                      className="input-field"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      id="email"
                    />
                    {error.emailError && (
                      <p className="error-msg">{error.emailError}</p>
                    )}
                  </div>
                  <div className="input-container">
                    <label className="input-label" htmlFor="dob">
                      DATE OF BIRTH(DD/MM/YYYY) <span className="star-symbol">*</span>
                    </label>
                    <input
                      className="input-field"
                      value={date}
                      placeholder="Enter your Date of Birth"
                      onChange={e => setDate(e.target.value)}
                      id="dob"
                      type='date'
                      format='dd/MM/yyyy'
                      max={maxDate}
                    />
                    {error.dobError && (
                      <p className="error-msg">{error.dobError}</p>
                    )}
                  </div>
                  <button type="submit" className="button">
                    Submit
                  </button>
                  <Link to="/" className="links">
                    <span>Click here to see user data</span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
  )
}

export default Form
