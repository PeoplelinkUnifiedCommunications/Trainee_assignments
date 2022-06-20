import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));

function Library() {

    const [credentials, setCredentials] = useState({ userName: "", password: "", showPassword: false })

    const classes = useStyles();
    const navigate = useNavigate()

    const handleClickShowPassword = () => {
        const passwordStaus = credentials.showPassword
        setCredentials({ ...credentials, showPassword: !passwordStaus })
    }


    const handleLogin=(e)=>{
        e.preventDefault()
        navigate('/libraryhome')
    }

    return (
        <div className="flexRow fullHeight bgImg jcCntr alignCntr ">
            <div className="flexAuto redBg pdngVLG borderRadius">

                <form onSubmit={handleLogin} className='flexCol mrgnHLG' >
                    <div>
                        <p className='txtAlignCntr'>Welcome to Login</p>
                    </div>
                    <div>
                        <TextField
                            required
                            id="outlined-required"
                            label="username"
                            margin='dense'
                            value={credentials.userName}
                            onChange={(e) => { setCredentials({ ...credentials, userName: e.target.value }) }}
                            variant="outlined"
                        />
                    </div>
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            fullWidth
                            id="outlined-adornment-password"
                            type={credentials.showPassword ? 'text' : 'password'}
                            value={credentials.password}
                            onChange={(e) => { setCredentials({ ...credentials, password: e.target.value }) }}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                    >
                                        {credentials.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={70}
                        />
                    </FormControl>
                    <div>
                        <Button type="submit" fullWidth variant="contained" color="secondary">
                            Login
                        </Button>
                    </div>
                    <div>
                        Don't have account sign in <a href='/form'> here </a>
                    </div>
                </form>

            </div>
        </div>
    )
}
export default Library