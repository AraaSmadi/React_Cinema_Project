import "./SignIn.css";
import TextField from "@mui/material/TextField";
import GoogleIcon from "../../images/google.svg";
import Box from "@mui/material/Box";
import React, { useState ,useContext} from "react";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AppleIcon from "../../images/apple.ico";
import axios from "axios";
import Usedata from "./Usedata";
import { Link } from "react-router-dom";
import { map } from "jquery";
import {AuthContext , Signupprovider} from '../Authetication/AuthContext';

const Forgetemail = () => {
  const [email, setemail] = useState("");


  function forget(e) {


    e.preventDefault();


   
  }

  return (
    <>
      <div className="login__main">
        <div className="login__row row ">
          <div className="login__right card">
            <div className="form__login">
              <div className="login__title">
                <h2>Create your free account</h2>
                <p>No credit card required.</p>
              </div>
              <div className="login__btns">
                <div className="google__login">
                  <button className="google">
                    {" "}
                    <img src={GoogleIcon} width="20" alt="" /> Continue with
                    Google
                  </button>
                </div>
                <div className="apple__login">
                  <button className="apple">
                    {" "}
                    <img src={AppleIcon} width="20" alt="" /> Continue with
                    Apple
                  </button>
                </div>
                <div className="or__line">
                  <p className="span-h"></p>
                  <p className="span-p"> or</p>
                  <p className="span-k"></p>
                </div>
                <Box
                  component="form"
                  noValidate
                  sx={{
                    "& .MuiInputBase-input": {
                      m: 1,
                      height: "4ch",
                      width: "35ch",
                    },
                    "& > :not(style)": { m: 1, width: "35ch" },
                    "& .MuiButtonBase-root": {
                      display: "flex",
                      justifyContent: "flex-end",
                      paddingX: "10px",
                      width: "30px",
                    },
                    "& .MuiInputBase-input::after": {
                      color: "red",
                      borderBottom: "2px solid red",

                      "&focus": {
                        color: "pink",
                        borderBottom: "2px solid red",
                      },
                    },
                  }}
                  className="input_all"
                  autoComplete="off"
                >
                  <div className="sign_name">
                    <h5>Email</h5>
                    <input
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setemail(e.target.value)}
                    />
                  </div>
                  
                  
                </Box>
                <div className="new__acc">
                  {/* <button > <link to= {{pathname : '/', }}> Login </link  ></button> */}
                  <button onClick={forget}>send confermition email</button>
                  {/* <p>  Don't have an Account? 
                    <Link to ="/signup">
                         <a href="url">Register</a>
                    </Link>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgetemail;
