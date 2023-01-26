import React, { useState, useEffect } from "react";
import { get } from "../../utilities"

import "../../utilities.css";

const Profile = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    document.title = "Profile Page";
    get("/api/whoami").then((userObj) => setUser(userObj));
  }, []);

  if (!user) {
    return (<div> Loading! </div>);
  }

  // TODO: change later to include profile info
  return (
    <>
      <h2 id="demobox"><center>MY PROFILE</center></h2>
      <div>
        Name: {user.name}
        </div>
      <div>
        Gender: {user.gender}
      </div>
      <div>
        Year of Graduation: {user.grad_year}
      </div>
      <div>
        Has Swipes: {user.has_swipes}
      </div>
      <div>
        Major: {user.major}
      </div>
    </>
  );
};


export default Profile;
