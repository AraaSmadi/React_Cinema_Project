import { Redirect, Route } from "react-router-dom";
import SignIn from "../../components/Authetication/SignIn";
import Signup from "../../components/Authetication/Signup";
import Forget from "../../components/Authetication/Forget";
import Conferm from "../../components/Authetication/conferm";

const RoutesAuth = () => {
  return (
    <>
      {" "}
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route path="/Login" component={SignIn} exact />
      <Route path="/Signup" component={Signup} exact />
      <Route path="/Forget" component={Forget} exact />
      <Route path="/Conferm" component={Conferm} exact />

    </>
  );
};

export default RoutesAuth;
