import React from 'react'
import TextField from '@material-ui/core/TextField';
import { Button } from '@mui/material';
import Header from '../header/header';
import "../login/style.css"
import { Link } from 'react-router-dom';
const Index = () => {
    return (


        <div className='flexCol '>
            <Header />
            <div div className='flexRow inlineBlock bodyCntr' >
                <div className='inlineBlock2 resmobdesktopnone blueBg ' >
                    <div className=''>

                    </div>
                </div>
                <div className='flexInline inlineBlock2 alignCntr justifyCntr'>
                    <div className='flex75 pdngLG'>
                        <div className='flexRow titleHeading alignCntr justifyCntr'>
                            <span className='headingXL'> Login</span>
                        </div>
                        <div className='flexRow pdngBMD'>
                            <TextField id="standard-basic" label="Email" fullWidth />
                        </div>
                        <div className='flexRow'>
                            <TextField id="standard-basic" label="Password" fullWidth />
                        </div>
                        <div className='flexRow justifyEnd pdngVSM'>
                            <span className='subHdngBlackTxtSM'>
                                Forgot Password ?
                            </span>
                        </div>
                        <div className='flexRow   pdngTMD'>
                            <Button variant="contained" color="primary" fullWidth>
                                Login
                            </Button>
                        </div>
                        <div className='flexRow pdngVMD alignCntr justifyCntr'>
                            <span className='lightTxt'>
                                Don't have an account ? <Link to="/SignUp">Sign Up</Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div >
            <div className='flexRow txtCntr pdngVMD alignCntr justifyCntr'>
                <span>© 2021 · inVC · PeopleLink Unified Communications Pvt. Ltd.
                    I agree to the
                    Terms & Conditions</span>
            </div>
        </div>
    )
}

export default Index;