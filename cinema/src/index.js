import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Signupprovider from "./components/Authetication/AuthContext";

ReactDOM.render(
<Signupprovider>
<App />
</Signupprovider>
,
 document.getElementById("root"));
