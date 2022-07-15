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

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const auth = useContext(AuthContext);

  function login(e) {


    e.preventDefault();

    // const { Email_status, pass__status, check } = Usedata(email, password);

    axios
      .get("https://62c52d60a361f725127c1c74.mockapi.io/users")
      .then(function (response) {
        console.log(response.data[0].email);

        for (let i = 0; i < 10; i++) {
          if (
            response.data[i].email !== email &&
            response.data[i].password !== password
          ) {
            setemail("");
            setpassword("");
          }
          if (response.data[i].email == email) {
            if (response.data[i].password !== password) {
              setpassword("");
            } else {

              console.log(response.data[i].id);
              localStorage.setItem('id',response.data[i].id);
              localStorage.setItem('name',response.data[i].name);
              auth.setislogin(false);
              window.location.href = "/";
            }
          } else {
            setemail("");
          }
        }
        return;
      });
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
                  <div className="sign_name">
                    <h5>Password</h5>
                    <input
                      type="password"
                      placeholder="Enter Pasword"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                </Box>
                <div className="new__acc">
                  {/* <button > <link to= {{pathname : '/', }}> Login </link  ></button> */}
                  <button onClick={login}>Login</button>
                  <p>  Don't have an Account? 
                    <Link to ="/signup">
                         <a href="url">Register</a>
                    </Link>
                  </p>
                  <p>  
                    <Link to ="/Forget">
                         <a href="url">Forgot password </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
