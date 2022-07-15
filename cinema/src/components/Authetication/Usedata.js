import { useState } from "react";
import axios from "axios";

const Usedata = (Email, Password) => {


  const [Defaule_Email, setEmail] = useState("aiman@gmail.com");
  const [Default_Password, setPass] = useState("12345");
  const [Email_status, setEmail_status] = useState("Invalid Email");
  const [pass__status, setpass__status] = useState(
    "Enter your Email and passsword"
  );

  // axios.get(`https://62c52d60a361f725127c1c74.mockapi.io/users`,
  //   .then(function (response) {
  //    setEmail(response.Email)
  //    set
  //   });
  //  });


  
  //  axios
  // .get("https://62c52d60a361f725127c1c74.mockapi.io/users")
  // .then(function (response) {

  //   console.log(response.Email);

  //   setEmail(response.Email);
  // });

  const check = () => {

    if (Email == Defaule_Email && Password == Default_Password) {





    } else {
      setpass__status("Invalid pass");
      setEmail_status("Invalid Email");




    }
  };

  //localStorage.setItem("useremail", email);
  return [ Email_status, pass__status, check ];
  console.log({})
};

export default Usedata;
