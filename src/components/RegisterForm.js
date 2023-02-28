import React, { useState, useContext } from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import Box from "@mui/material/Box";
import { Button } from "reactstrap";
import "../index.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "../store/authContext";
import {useFormik} from 'formik';
import {registerSchema} from '../validations/UserValidation'

const RegisterForm = () => {
  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState("none");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    image: "",
  });
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;
//     console.log(name, value);
//     setUser({ ...user, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (
//       user.firstName &&
//       user.lastName &&
//       user.username &&
//       user.password &&
//       user.image
//     ) {
//       const newUser = {
//         firstName: user.firstName,
//         lastName: user.lastName,
//         username: user.username,
//         password: user.password,
//         image: user.image,
//       };
//       axios
//         .post("http://localhost:4444/register", newUser)
//         .then(({ data }) => {
//           console.log("After Auth", data);
//           navigateTo();
//           const { token, exp, userId } = data;
//           authCtx.login(token, exp, userId);
//         })
//         .catch((err) => {
//           console.log(err);
//           setMessage(err.response.data);
//           setDisplay("block");
//         });

//       console.log("submitHandler called in registerForm");
//     }
//     setUser({
//       firstName: "",
//       lastName: "",
//       username: "",
//       password: "",
//       image: "",
//     });
//   };
  const formik = useFormik({
    initialValues: {
      username:'',
      password: '',
      firstName:'',
      lastName:'',
      image:''
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 5));
      axios
      .post("http://localhost:4444/register", values)
      .then(({ data }) => {
        console.log("After Auth", data);
        navigateTo();
        const { token, exp, userId } = data;
        authCtx.login(token, exp, userId);
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data);
        setDisplay("block");
      });

    console.log("submitHandler called in registerForm");
    },
  });

  const navigateTo = () => {
    navigate("/login");
  };
  return (
    <div className="signUp-container bg-wrapper">
      <div className="form-wrapper">
        <main className="main-form">
          <h2 className="title">Create an Account</h2>
          <form onSubmit={formik.handleSubmit}>
            <Box
              className="App"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                width: "400px",
                marginLeft:'3rem'
              }}
            >
              <IconTextField
                label="First Name *"
                id="firstName"
                name="firstName"
                // value={user.firstName}
                // onChange={handleChange}
                iconEnd={<PersonOutlineIcon />}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <IconTextField
                label="Last Name *"
                id="lastName"
                name="lastName"
                // value={user.lastName}
                // onChange={handleChange}
                iconEnd={<PersonOutlineIcon />}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
              <IconTextField
                label="username *"
                id="username"
                name="username"
                // value={user.username}
                // onChange={handleChange}
                iconEnd={<MailOutlineIcon />}
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
              <IconTextField
                label="Password *"
                type="password"
                id="password"
                name="password"
                // value={user.password}
                // onChange={handleChange}
                iconEnd={<VpnKeyIcon />}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
              <IconTextField
                label="image *"
                id="image"
                name="image"
                  // value={user.image}
                // onChange={handleChange}
                iconEnd={<PhotoCameraBackIcon />}
                value={formik.values.image}
                onChange={formik.handleChange}
                error={formik.touched.image && Boolean(formik.errors.image)}
                helperText={formik.touched.image && formik.errors.image}
              />
            </Box>
            <Button className="btn btn-success m-3">Register</Button>
          </form>
          <p style={{ display: display }} className="auth-msg">
            {message}
          </p>
          <footer>
            <p>Already have an account?</p>
            <p className="sec-btn" onClick={navigateTo}>
              Login
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
};

const IconTextField = ({ iconStart, iconEnd, InputProps, ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null,
      }}
    />
  );
};

export default RegisterForm;
