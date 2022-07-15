import Heading from "../Header/Heading";
import "./MainNav.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "../../images/home-icon.svg";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MovieIcon from "../../images/movie-icon.svg";
// import TheatersIcon from "../../images/series-icon.svg";
import $ from "jquery";

import { AuthContext, Signupprovider } from '../Authetication/AuthContext';



const user_id =localStorage.getItem('id') ;



$(function () {
  $(document).on("scroll", function () {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

const MainNav = () => {

  const auth = useContext(AuthContext);

  function handellogout() {

    auth.setislogin(true);
    localStorage.removeItem('id');
    localStorage.removeItem('name');

  }


  return (
    <>
      <nav className="navbar navbar-expand navbar-light fixed-top">
        <Link className="navbar-brand" to="/">
          <Heading />
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active  nav__link">
              <Link className="nav-link" to="/">
                <img
                  src={HomeIcon}
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",
                    marginRight: "0px",
                
                  }}
                  alt=""
                  />
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            <li className="nav-item  nav__link">
              <Link className="nav-link" to="/all-movies">
                <img
                  src={MovieIcon}
                  style={{
                    fontSize: "17px",
                    marginBottom: "2px",
                    marginRight: "1px",
                  }}
                  alt=""
                />
                Movies
              </Link>
            </li>
            <li className="nav-item  nav__link">
              <Link className="nav-link" to="/treading" >
                <WhatshotIcon
                  style={{
                    fontSize: "17px",
                    marginBottom: "5px",

                    marginRight: "2px",
                  }}
                />
                About
              </Link>
            </li>
            <li className="nav-item nav__link">
              <Link className="nav-link" to="/all-series">

                <i class='fas fa-mobile-alt' style={{
                  fontSize: "17px",
                  marginBottom: "5px",
                  marginRight: "1px",
                }}></i>
                contact US
              </Link>
            </li>
          </ul>
          {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}



          <div>
            {!user_id  ? <div>


              <div className="all__right">
                <div className="btn-login">
                  <Link to="/login">
                    <button className=" login-btn">login</button>
                  </Link>
                </div>
              </div>
            </div> : <div>
              <div className="all__right">
                <div className="btn-login b-3">
                  <Link to="/profile">
                    <button className="login-btn ">Profile</button>

                  </Link>

                  {/* add profile button  note *** it must be user icon on click give dropdown list include profile and logput */}
                  <Link to="/">
                    <button className=" login-btn ml-3" onClick={handellogout}>LogOut</button>

                  </Link>

                </div>

              </div>
            </div>}
          </div>
          <div>
            {!user_id ? <div>

              <div className="all__right">
                <div className="btn-login">
                  <Link to="/Signup">
                    <button className=" login-btn">Signup</button>
                  </Link>
                </div>
              </div>

            </div> : <div></div>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;