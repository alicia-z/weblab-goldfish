import React from "react";
import { GoogleOAuthProvider, GoogleLogin, googleLogout } from "@react-oauth/google";
import { Link } from "@reach/router";


import "../../utilities.css";
import "./NavBar.css";

//DONE REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "875626601835-nlh62o0i41iqspllgddn883q5jsatt2v.apps.googleusercontent.com";

const NavBar = ({ userId, handleLogin, handleLogout }) => {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      
      <nav className="NavBar-container">
        <div className="NavBar-title u-inlineBlock">goldfish</div>
        <div className="NavBar-linkContainer u-inlineBlock">
          {userId && (
            <Link to="/" className="NavBar-link">
              Explore
            </Link>
          )}
          {userId && (
            <Link to="/profile/" className="NavBar-link">
              Profile
            </Link>
          )}
          {userId && (
            <Link to="/matches/" className="NavBar-link">
              Matches
            </Link>
          )}
          {userId ? (
            <button className="NavBar-link"
              onClick={() => {
                googleLogout();
                handleLogout();
              }}
            >
          Logout
          </button>
          ) : (
            <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
          )}
        </div>
      </nav>
      
    </GoogleOAuthProvider>
  );
};

export default NavBar;
