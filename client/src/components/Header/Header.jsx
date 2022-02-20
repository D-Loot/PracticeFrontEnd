import React from "react";
import { Link } from "react-router-dom";
// import Logo from "../../assets/furbook_logo_K.svg";
import Auth from "../../utils/auth";
import "./header.css";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="navHeader">
      <div className="left">
        <div>
          {/* <Link className="logoLink" to="/">
            <img src={Logo} className="logoImg" />
          </Link> */}
          <h1>TITLE: TO BE CHANGED</h1>
          <p className="tagline">TO BE CHANGED</p>
        </div>
      </div>
      <div className="right">
        {Auth.loggedIn() ? (
          <>
            <Link className="navBtn" to="/me">
              <button className="ui primary button">
                {Auth.getProfile().data.username}&rsquo;s profile
              </button>
            </Link>
            <button className="navBtn ui inverted button" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="navBtn" to="/login">
              <button className="ui primary button">Login</button>
            </Link>
            <Link className="navBtn" to="/register">
              <button className="ui primary button">Signup</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
