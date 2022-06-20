import PersonIcon from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react'
import React, { useRef } from 'react';
import { useReactToPrint } from "react-to-print";
import './styles.css'


function Assignment6() {

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    const [activeTab, setActiveTab] = useState("HEADER")
    const [formStatus, setFormStatus] = useState({ header: false, experience: false, education: false, skills: false })
    const [header, setHeader] = useState({ name: "", address1: "", address2: "", mobile: "", email: "" })
    const [experience, setExperience] = useState({ company: "", officeAddress: "", designation: "", startDate: "", endDate: "" })
    const [education, setEducation] = useState({ institution: "", city: "", major: "", GraduationYear: "", Other: "" })
    const [skills, setSkills] = useState({skillsKnown:""})

    const handleHeaderSubmit = (event) => {
        event.preventDefault()
        setActiveTab("EXPERIENCE")
        setFormStatus({ ...formStatus, header: true })
    }

    const renderHeader = () => {
        return (
            <form onSubmit={handleHeaderSubmit} className='flexMinWidthRow'>
                <div className='flexCol'>
                    <TextField
                        required
                        margin="dense"
                        id="outlined-required"
                        label="Full Name"
                        defaultValue=""
                        variant="outlined"
                        value={header.name}
                        onChange={(e) => { setHeader({ ...header, name: e.target.value }) }}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="outlined-required"
                        label="Address Line 1"
                        defaultValue=""
                        variant="outlined"
                        value={header.address1}
                        onChange={(e) => { setHeader({ ...header, address1: e.target.value }) }}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="outlined-required"
                        label="Address Line 2"
                        defaultValue=""
                        variant="outlined"
                        value={header.address2}
                        onChange={(e) => { setHeader({ ...header, address2: e.target.value }) }}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="outlined-number"
                        label="Mobile"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={header.mobile}
                        onChange={(e) => { setHeader({ ...header, mobile: e.target.value }) }}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="outlined-number"
                        label="E-mail"
                        type="email"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        value={header.email}
                        onChange={(e) => { setHeader({ ...header, email: e.target.value }) }}
                    />
                    <div className='mrgnHMD'>
                        <Button fullWidth variant="contained" type="submit" color="secondary">
                            Add
                        </Button>
                    </div>
                </div>
            </form>
        )
    }

    const handleExperienceSubmit = (event) => {
        event.preventDefault()
        setFormStatus({ ...formStatus, experience: true })
        setActiveTab("EDUCATION")
    }

    const handleEducationSubmit = (event) => {
        event.preventDefault()
        setFormStatus({ ...formStatus, education: true })
        setActiveTab("SKILLS")

    }

    const handleSkillsSubmit=(event)=>{
        event.preventDefault()
        setFormStatus({ ...formStatus, skills: true })
        if(formStatus.education && formStatus.experience && formStatus.skills && formStatus.header){
            handlePrint()
        }else if(formStatus.header === false){
            setActiveTab("HEADER")
        }else if(formStatus.experience === false){
            setActiveTab("EXPERIENCE")
        }else if(formStatus.education === false){
            setActiveTab("EDUCATION")
        }else if(formStatus.skills === false){
            setActiveTab("SKILLS")
        }
        
    }

    const renderExperience = () => {
        return (
            <form onSubmit={handleExperienceSubmit} className='flexMinWidthRow'>
                <div className='flexCol'>
                    <TextField
                        required
                        margin="dense"
                        id="outlined-required"
                        label="Company"
                        value={experience.company}
                        onChange={(e) => { setExperience({ ...experience, company: e.target.value }) }}
                        variant="outlined"

                    />
                    <TextField
                        required
                        margin="dense"
                        id="outlined-required"
                        label="Location"
                        value={experience.officeAddress}
                        onChange={(e) => { setExperience({ ...experience, officeAddress: e.target.value }) }}
                        variant="outlined"

                    />
                    <TextField
                        required
                        margin="dense"
                        id="outlined-required"
                        label="Designation"
                        value={experience.designation}
                        onChange={(e) => { setExperience({ ...experience, designation: e.target.value }) }}
                        variant="outlined"

                    />
                    <TextField
                        type="date"
                        required
                        margin="dense"
                        format={"dd/mm/yyyy"}
                        id="outlined-required"
                        label="Start Date"
                        value={experience.startDate}
                        onChange={(e) => { setExperience({ ...experience, startDate: e.target.value }) }}
                        variant="outlined"
                    />
                    <TextField
                        type="date"
                        required
                        margin="dense"
                        id="outlined-required"
                        label="Start Date"
                        value={experience.endDate}
                        onChange={(e) => { setExperience({ ...experience, endDate: e.target.value }) }}
                        variant="outlined"
                    />
                    <div className='mrgnHMD'>
                        <Button fullWidth variant="contained" type="submit" color="secondary">
                            Add
                        </Button>
                    </div>
                </div>
            </form>
        )

    }

    const renderEducation = () => {
        return (
            <form onSubmit={handleEducationSubmit} className='flexMinWidthRow'>
                <div className='flexCol'>
                    <TextField
                        required
                        margin="dense"
                        id="outlined-required"
                        label="Institution"
                        variant="outlined"
                        value={education.institution}
                        onChange={(e) => { setEducation({ ...education, institution: e.target.value }) }}

                    />
                    <TextField
                        required
                        margin="dense"
                        id="outlined-required"
                        label="City, State, Country"
                        variant="outlined"
                        value={education.city}
                        onChange={(e) => { setEducation({ ...education, city: e.target.value }) }}
                    />
                    <TextField
                        required
                        margin="dense"
                        id="outlined-required"
                        label="Major"
                        variant="outlined"
                        value={education.major}
                        onChange={(e) => { setEducation({ ...education, major: e.target.value }) }}

                    />
                    <TextField
                        required
                        margin="dense"
                        id="outlined-required"
                        label="Graduation Year"
                        variant="outlined"
                        value={education.GraduationYear}
                        onChange={(e) => { setEducation({ ...education, GraduationYear: e.target.value }) }}
                    />
                    <TextField
                        margin="dense"
                        id="outlined-required"
                        label="Aditional info"
                        variant="outlined"
                        value={education.Other}
                        onChange={(e) => { setEducation({ ...education, Other: e.target.value }) }}
                    />
                    <div className='mrgnHMD'>
                        <Button fullWidth variant="contained" type="submit" color="secondary">
                            Add
                        </Button>
                    </div>
                </div>
            </form>
        )
    }

    const renderSkills = () => {
        return (
            <form onSubmit={handleSkillsSubmit} className='flexMinWidthRow'>
                <div className='flexCol'>
                    <TextField
                        required
                        id="outlined-multiline-static"
                        label="Skills"
                        multiline
                        margin='dense'
                        rows={4}
                        variant="outlined"
                        value={skills.skillsKnown}
                        onChange={(e) => { setSkills({skillsKnown:e.target.value }) }}
                    />
                    <div className='mrgnHMD'>
                        <Button fullWidth variant="contained" type="submit" color="secondary">
                            Add
                        </Button>
                    </div>
                </div>

            </form>
        )
    }

    const renderForm = () => {
        if (activeTab === "HEADER") {
            return <>
                {renderHeader()}</>
        } else if (activeTab === "EXPERIENCE") {
            return <>
                {renderExperience()}</>
        } else if (activeTab === "EDUCATION") {
            return <>{renderEducation()}</>
        } else {
            return <>{renderSkills()}</>
        }

    }

    return (
        <div className="flexRow main-bg">
            <div className="flexAuto pdngMD redBg">
                <div className="flexCol">
                    <div className='flexRow mrgnBMD'>
                        <PersonIcon />
                    </div>
                    <div className='flexRow borderBottom mrgnBMD'>
                        <div>
                            <button type='button' onClick={(event) => { setActiveTab(event.target.value) }} value="HEADER" className='actionbtn borderNone'>Header</button>
                        </div>
                        <div>
                            <button type='button' onClick={(event) => { setActiveTab(event.target.value) }} value="EXPERIENCE" className='actionbtn borderNone'>Experience</button>
                        </div>
                        <div>
                            <button type='button' onClick={(event) => { setActiveTab(event.target.value) }} value="EDUCATION" className='actionbtn borderNone'>Education</button>
                        </div>
                        <div>
                            <button type='button' onClick={(event) => { setActiveTab(event.target.value) }} value="SKILLS" className='actionbtn borderNone'>Skills</button>
                        </div>

                    </div>
                    <h1>{activeTab}</h1>
                    <div className='flexRow'>
                        {renderForm()}
                    </div>
                </div>
            </div>
            <div className="flexMinWidthCol blueBg pdngLG">
                <div className='flexRow pdfCntr'>
                    <div>
                        <Button onClick={handlePrint} variant="contained" type="submit" color="secondary">
                            Print
                        </Button>
                    </div>

                    <div ref={componentRef} className='flexMinWidthCol bgWhite pdngLG mrgnLG page'>
                        <div className='flexCol alignCntr'>
                            <h3>{header.name}</h3>
                            <p>{header.address1}</p>
                            <p>{header.address2}</p>
                            <p>{header.mobile}</p>
                            <p>{header.email}</p>
                        </div>
                        {formStatus.header && <hr className='hr-line' />}
                        <div className='flexCol'>
                            {formStatus.header && <h1>Experience Details</h1>}
                            <p>{`${experience.company} ${experience.company.length > 0 ? "," : ""}  ${experience.officeAddress}`}</p>
                            <p>{`${experience.designation}${experience.startDate.length > 0 ? ", Started :- " : ""}${experience.startDate}${experience.endDate.length > 0 ? ", Ended :- " : ""}${experience.endDate}`}</p>
                        </div>
                        {education.institution.length > 0 && <h3>EDUCATION</h3>}
                        <div className='flexCol'>
                            <p>{`${education.institution} ${education.city}`}</p>
                            <p>{`${education.major} ${education.GraduationYear}`}</p>
                            <p>{education.Other}</p>
                        </div>
                        {skills.skillsKnown.length > 0 && <h3>SKILLS</h3>}
                        <div className='flexCol'>
                            <p>{skills.skillsKnown}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}
export default Assignment6