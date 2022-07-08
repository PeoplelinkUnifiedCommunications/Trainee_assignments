import React from 'react'
import "./style.css"
const SignUp = () => {
    return (
        <div className='flexCol alignCntr pdngVLG fullHeight'>
            <div className='flexInline width75'>
                <div className='flexCol'>
                    <div className='flexRow alignCntr justifyCntr pdngVMD'>
                        <h2>
                            SignUp
                        </h2>
                    </div>
                    {/* <div className='flexRow'>
                        <Button variant='contained' color='primary' fullWidth>Student</Button>
                        <Button variant='contained' color='primary ' fullWidth>Library</Button>
                    </div> */}
                    <div class="flexRow justifySpaceBtn titleHeading">
                        <div class="brdrBlackSM flexGrow tabActive cursourPointer brdrRadiusL alignCntr justifyCntr">
                            <span class="lineHeight negMrgnT2"> Student </span>
                        </div>
                        <div class="brdrBlackSM flexGrow   alignCntr jcCntr cursourPointer alignCntr justifyCntr">
                            <span class="lineHeight negMrgnT2"> Library</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp