import React, { useState } from "react";



export  const AuthContext = React.createContext();

export default function Signupprovider(props) {

const [islogin ,setislogin ] = useState();

  return (
    <AuthContext.Provider value={{  islogin : islogin , setislogin : setislogin}}>
      {props.children}
    </AuthContext.Provider>
  );
}
