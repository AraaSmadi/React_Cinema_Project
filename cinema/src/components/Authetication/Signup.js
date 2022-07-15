import "./Signup.css";
import TextField from "@mui/material/TextField";
import GoogleIcon from "../../images/google.svg";
import Box from "@mui/material/Box";
import React, { useState, useContext, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AppleIcon from "../../images/apple.ico";
import axios from "axios";
import { Router } from "react-router";
import { AuthContext, Signupprovider } from "../Authetication/AuthContext";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");

  const auth = useContext(AuthContext);

  function login(e) {
    e.preventDefault();

    // const { Email_status, pass__status, check } = Usedata(email, password);
    axios({
      method: "post",
      url: "https://62c52d60a361f725127c1c74.mockapi.io/users",
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    getdata( );
  }

  // useEffect(() => {
  //   getdata( );

  // });

  function getdata() {

    fetch("https://62c52d60a361f725127c1c74.mockapi.io/users")
      .then((response) => response.json())
      .then((json) => {
        json.forEach((user) => {
          if (user.email == email) {
            if (user.password == password) {
              localStorage.setItem("id", user.id);
              localStorage.setItem('name',user.name)
              console.log(user.id)
              auth.setislogin(false);

              setname("");
              setemail("");
              setpassword("");
              setconfirm_password("");

              window.location.href = "/";
            }
          }
        });
      });

    // axios
    //   .get("https://62c52d60a361f725127c1c74.mockapi.io/users")
    //   .then(function (response) {
    //     console.log(response.data[0].email);

    //     for (let i = 0; i < 10; i++) {
    //       if (response.data[i].email == email) {
    //         if (response.data[i].password == password) {
    //           localStorage.setItem("id", response.data[i].id);
    //           auth.setislogin(false);

    //           setname("");
    //           setemail("");
    //           setpassword("");
    //           setconfirm_password("");

    //           window.location.href = "/";
    //         }
    //       }
    //     }
    //   });
  }

  // var myBtn = document.getElementById("btn");

  // myBtn.addEventListener("click", login());

  // myBtn.addEventListener("click", getdata());

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
               
                <div className="or__line">
                  <p className="span-h"></p>
                  <p className="span-p"> or</p>
                  <p className="span-k"></p>
                </div>
                <form onSubmit={getdata}>
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
                    <div className="Enter_name">
                      <h5>Name</h5>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>

                    <div className="sign_email">
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

                    <div className="sign_name">
                      <h5>Confirm password</h5>
                      <input
                        type="password"
                        placeholder="Enter Pasword"
                        value={confirm_password}
                        onChange={(e) => setconfirm_password(e.target.value)}
                      />
                    </div>
                  </Box>
                </form>
                <div className="new__acc">
                  {/* <button > <link to= {{pathname : '/', }}> Login </link  ></button> */}
                    
                  <button id="btn" onClick={login}>Create New Account</button>
                  <p>  Aready have an Account? 
                    <Link to ="/login">
                         <a href="url">Login</a>
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
