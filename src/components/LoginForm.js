import React, {useState, useContext} from 'react';
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import Box from "@mui/material/Box";
import {Button} from 'reactstrap';
import '../index.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../store/authContext';

const LoginForm = ({setLogin}) => {
    const [message, setMessage] = useState('')
    const [display, setDisplay] = useState('none')
    const [user, setUser]=useState({username:'',password:''})
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
  
const handleChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value)
    setUser({...user, [name]: value})
}

const handleSubmit=(e)=>{
e.preventDefault();
if(user.username && user.password){
    const newUser = {
        username: user.username,
        password: user.password,
       
    }
    axios
    .post('http://localhost:4444/login', newUser)
    .then(({ data }) => {
      console.log("After Auth login", data);
      const { token, exp, userId } = data;
      authCtx.login(token, exp, userId);
      navigate('/dashboard')
    })
    .catch((err) => {
      console.log(err);
      setMessage(err.response.data)
      setDisplay('block')
    });

  console.log("submitHandler called in registerForm");

};
    setUser({ username:'', password:''})
}

const navigateTo=()=>{
navigate('/register')
setLogin(false)
}
  return (
    <div className='signUp-container bg-wrapper'>
       
        <div className="form-wrapper">
  <main className='main-form'>
    <h2 className='title'>Please Log In</h2>
    <form onSubmit={handleSubmit}>
        <Box
      className="App"
      sx={{
        display:'flex',
        flexDirection: 'column',
        gap:'1rem',
        width:'400px'
      }}
    >
   
      <IconTextField label="username *" id="username" name='username' value={user.username} onChange={handleChange} iconEnd={<MailOutlineIcon />} />
      <IconTextField label="Password *"  type='password' id='password' name='password' value={user.password} onChange={handleChange} iconEnd={<VpnKeyIcon />} />
    </Box>
    <Button className='btn'>Login</Button>
    </form>
    <p style={{display: display}} className='auth-msg'>{message}</p>
    <footer>
    <p>Need a new account?</p>
    <p className='sec-btn' onClick={navigateTo}>Register</p>
  </footer>
    </main>
    </div>
    </div>
  );
}

const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null
      }}
    />
  )
}

export default LoginForm;