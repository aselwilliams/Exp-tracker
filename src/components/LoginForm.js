import React, {useState} from 'react';
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

const LoginForm = () => {
    const [message, setMessage] = useState('')
    const [display, setDisplay] = useState('none')
    const [user, setUser]=useState({username:'',password:''})
    // const [usersGroup, setUsersGroup] = useState([]);
    const navigate=useNavigate();
  
const handleChange=(e)=>{
    const name= e.target.name;
    const value=e.target.value;
    console.log(name, value)
    setUser({...user, [name]: value})
}

const handleSubmit=(e)=>{
e.preventDefault();
if(user.username && user.password){
    // const newUser={...user, id:new Date().getTime().toString()};
    // setUsersGroup([...usersGroup, newUser])
    const newUser = {
        username: user.username,
        password: user.password,
       
    }
    axios
    .post('http://localhost:4444/login', newUser)
    .then(({ data }) => {
      console.log("After Auth login", data);
      navigateTo()
      const { token, exp, userId } = data;
    //   authCtx.login(token, exp, userId);
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
navigate('/login')
}
  return (
    <div className='signUp-container bg-wrapper'>
       {/* <div className="bg-wrapper"> */}
            {/* <img src='https://hpid-login-ui-images.id.hp.com/production/hp-smart-extra-large-revised.png' alt='woman'/> */}
       
        <div className="form-wrapper">
  <main className='main-form'>
    <h2 className='title'>Create an Account</h2>
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
      <IconTextField label="First Name *" id='firstName' name='firstName' value={user.firstName} onChange={handleChange} iconEnd={<PersonOutlineIcon />} />
      <IconTextField label="Last Name *" id='lastName' name='lastName' value={user.lastName} onChange={handleChange} iconEnd={<PersonOutlineIcon />} />
      <IconTextField label="username *" id="username" name='username' value={user.username} onChange={handleChange} iconEnd={<MailOutlineIcon />} />
      <IconTextField label="Password *" id='password' name='password' value={user.password} onChange={handleChange} iconEnd={<VpnKeyIcon />} />
      <IconTextField label="image *" id='image' name='image' value={user.image} onChange={handleChange} iconEnd={<PhotoCameraBackIcon />} />   
    </Box>
    <Button className='btn btn-success m-3'>Register</Button>
    </form>
    <p style={{display: display}} className='auth-msg'>{message}</p>
    <footer>
    <p>Already have an account?</p>
    <p className='login-tag' onClick={navigateTo}>Login</p>
  </footer>
    </main>
    </div>
    {/* </div> */}
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