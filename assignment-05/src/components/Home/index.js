import './index.css'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Home() {



    const [name, setName] = useState("")
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState('')
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [educationDetails, setEducationDetails] = useState([1])
    const [imageUrl, setImageUrl] = useState("")
    const [generateButton, setGenerateButton] = useState(false)
    
 
    

    const saveCity = (event) => {
        setCity(event.target.value)
    }

    const saveCountry = (event) => {
        setCountry(event.target.value)
    }

    const saveState = (event) => {
        setState(event.target.value)
    }


    const navigate = useNavigate()

    const generatePdf = () => {
        navigate("/pdf")
    }

    const saveEmail = (event) => {
        setEmail(event.target.value)
    }


    const saveName = (event) => {
        setName(event.target.value)
    }

    const saveNumber = (event) => {
        setNumber(event.target.value)
    }

    const saveGender = (event) => {
        setGender(event.target.value)
    }

    const addField = () => {
        const lastNumber = educationDetails.length + 1
        const newList = [...educationDetails, lastNumber]
        setEducationDetails(newList)
    }

    const saveImage = (event) => {
        setImageUrl(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        setGenerateButton(true)
        localStorage.setItem("NAME", name)
        localStorage.setItem("NUMBER", number)
        localStorage.setItem("EMAIL", email)
        localStorage.setItem("GENDER", gender)
        localStorage.setItem("CITY", city)
        localStorage.setItem("STATE", state)
        localStorage.setItem("COUNTRY", country)
        localStorage.setItem("IMGURL", imageUrl)

    }


    return (
        <div className='Resume-bg-container'>
            <h1>Prepare Resume</h1>
            <form className="form-bg-container" onSubmit={onFormSubmit} >
                <h5 className='heading2'>Personal Details</h5>
                <div className='label-input-container'>
                    <label htmlFor='Name'>Name</label>
                    <input value={name} placeholder="Name" onChange={saveName} type="text" id="Name" required />
                </div>
                <div className='label-input-container'>
                    <label htmlFor='Number'>Number</label>
                    <input value={number} placeholder="Number" onChange={saveNumber} maxLength="10" accept="digit" type="text" id="Number" required />
                </div>
                <div className='label-input-container'>
                    <label htmlFor='Email'>E-MAIL</label>
                    <input value={email} placeholder="email" onChange={saveEmail} type="email" id="Email" required />
                </div>

                <div className='label-input-container'>
                    <label htmlFor='City'>City</label>
                    <input value={city} placeholder="City" onChange={saveCity} type="text" id="City" required />
                </div>
                <div className='label-input-container'>
                    <label htmlFor='State'>State</label>
                    <input value={state} placeholder="State" onChange={saveState} type="text" id="State" required />
                </div>
                <div className='label-input-container'>
                    <label htmlFor='Country'>Country</label>
                    <input value={country} placeholder="Country" onChange={saveCountry} type="text" id="Country" required />
                </div>
                <label for="gender">Gender</label>
                <select className='label-input-container-select' onChange={saveGender} required>
                    <option name="gender" value="">Select</option>
                    <option name="gender" value="Male">Male</option>
                    <option name="gender" value="Female">Female</option>
                    <option name="gender" value="Other">Other</option>
                </select>
                <div>
                    <label htmlFor='resumeImage'>Image</label>
                    <input value={imageUrl} onChange={saveImage} id="resumeImage" type="file" required />
                </div>
                <h5 className='heading2'>Educational Details</h5>

                <ul className='educational-details-container'>
                    {educationDetails.map((each) =>{ 
                     
                     console.log(each)

                    return(
                        <li className='list-item-education-field' key={parseInt(each)}>
                        <div className='button-container'>
                            <button onClick={addField} className="button-add-field" type="">Add</button>
                        </div>
                        <input className='input-field' type="text" placeholder='Education Type' required />
                        <input className='input-field' type="text" placeholder='Subjects' required />
                        <input className='input-field' type="text" placeholder='college' required />
                        <input className='input-field' type="text" placeholder='Pecentage/ CGPA' required />

                    </li>
                    )}
                   )}
                </ul>
                <div className='button-save-div'>
                    <button type='submit'>Save</button>
                </div>

            </form>
            {generateButton && <button type='button' onClick={generatePdf}>Generate</button>}
        </div>
    )

}
export default Home