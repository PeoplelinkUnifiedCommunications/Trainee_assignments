import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

import './index.css';


function Home() {

    const [activeTab, setActiveTab] = useState("Header")
    const [Name, setName] = useState("")
    const [Address, setAddress] = useState("")
    const [AddressLine, setAddressLine] = useState("")
    const [Mobile, setMobile] = useState("")
    const [Email, setEmail] = useState("")
    const [HeaderStatus, setHeaderStatus] = useState(false)


    const [Company, setCompany] = useState("")
    const [OfficeLocation, setOfficeLocation] = useState("")
    const [Designation, setDesignation] = useState("")

    const [Institution, setInstitution] = useState("")

    const handleTabChnage = (event) => {
        setActiveTab(event.target.value)
    }

    const saveDate=(event)=>{
        console.log(event.target.value)

    }

    const handleHeaderSubmit = (event) => {
        event.preventDefault()
        setHeaderStatus(true)
        setActiveTab("Experience")

    }

    const getHeaderPart = () => {
        return (
            <form onSubmit={handleHeaderSubmit} className='form-container'>
                <TextField
                    required
                    margin='dense'
                    id="outlined-required"
                    label="Name"
                    variant="outlined"
                    size='small'
                    value={Name}
                    onChange={(event) => { setName(event.target.value) }}
                />
                <TextField
                    required
                    margin='dense'
                    id="outlined-required"
                    label="Address"
                    variant="outlined"
                    size='small'
                    value={Address}
                    onChange={(event) => { setAddress(event.target.value) }}
                />
                <TextField
                    required
                    margin='dense'
                    id="outlined-required"
                    label="Address Line 2"
                    variant="outlined"
                    size='small'
                    value={AddressLine}
                    onChange={(event) => { setAddressLine(event.target.value) }}
                />
                <TextField
                    required
                    margin='dense'
                    id="outlined-required"
                    label="Mobile"
                    variant="outlined"
                    size='small'
                    type="number"
                    value={Mobile}
                    onChange={(event) => { setMobile(event.target.value) }}
                />
                <TextField
                    required
                    margin='dense'
                    id="outlined-required"
                    label="Email"
                    variant="outlined"
                    size='small'
                    type="email"
                    value={Email}
                    onChange={(event) => { setEmail(event.target.value) }}
                />
                <div className='mrgnTSM'>
                    <Button variant="contained" type="submit" color="secondary">
                        Add
                    </Button>
                </div>

            </form>
        )
    }

    const getExperiencePart = () => {
        return (
            <div>
                <form className='form-container'>
                    <TextField
                        required
                        margin='dense'
                        id="outlined-required"
                        label="Company"
                        variant="outlined"
                        size='small'
                        value={Company}
                        onChange={(event) => { setCompany(event.target.value) }}
                    />
                    <TextField
                        required
                        margin='dense'
                        id="outlined-required"
                        label="Location"
                        variant="outlined"
                        size='small'
                        value={OfficeLocation}
                        onChange={(event) => { setOfficeLocation(event.target.value) }}
                    />
                    <TextField
                        required
                        margin='dense'
                        id="outlined-required"
                        label="Designation"
                        variant="outlined"
                        size='small'
                        value={Designation}
                        onChange={(event) => { setDesignation(event.target.value) }}
                    />   
                </form>
            </div>
        )
    }

    const getEducationPart = () => {
        return (
            <div>
                <form className='form-container'>
                    <TextField
                        required
                        margin='dense'
                        id="outlined-required"
                        label="Institution"
                        variant="outlined"
                        size='small'
                        value={Institution}
                        onChange={(event) => { setInstitution(event.target.value) }}
                    />
                </form>
            </div>
        )
    }

    const getSkillsPat = () => {
        return (
            <h1>Skill</h1>
        )
    }

    const getTabDetails = () => {
        if (activeTab === "Header") {
            return (
                getHeaderPart()
            )
        } else if (activeTab === "Experience") {
            return (
                getExperiencePart()
            )
        } else if (activeTab === "Education") {
            return (
                getEducationPart()
            )
        } else {
            return (
                getSkillsPat()
            )
        }
    }

    return (
        <div className='Home-bg-container'>
            <div className='navbar-bg-container-resume-home-page'>
                <img className='resume-logo-stying' src='./images/resume-logo.png' alt="resume" />
            </div>
            <div className='form-pdf-bg-container'>
                <div className='form-bg-container'>
                    <h1>PDF</h1>
                    <div className='tab-list-container'>
                        <div className='ul-list'>
                            <button className='tab-button-styling' value={"Header"} onClick={handleTabChnage}>HEADER</button>
                            <button className='tab-button-styling' value={"Experience"} onClick={handleTabChnage}>EXPERIENCE</button>
                            <button className='tab-button-styling' value={"Education"} onClick={handleTabChnage}>EDUCATION</button>
                            <button className='tab-button-styling' value={"Skill"} onClick={handleTabChnage}>SKILL</button>
                        </div>
                    </div>
                    <hr className='hr-line' />
                    <div>
                        {getTabDetails()}
                    </div>
                </div>
                <div className='pdf-bg-container'>
                    <div className='page-a4 pdngVMD'>
                        <div className='HeaderPart'>
                            <h1>{Name}</h1>
                            <p>{Address}</p>
                            <p>{AddressLine}</p>
                            <p>{Mobile.length > 0 && "Mobile : "}{Mobile}</p>
                            <p>{Email}</p>
                        </div>
                        {HeaderStatus && <hr />}
                        <div className='ExperiencePart'>
                            {HeaderStatus && <h3>Professional Experience</h3>}
                            <p>{`${Company} ${OfficeLocation}`}</p>
                            <p>{Designation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home