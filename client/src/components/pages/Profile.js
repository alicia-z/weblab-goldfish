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
      <div>
        your name is: {user.name}
      </div>
    </>
  );
};

export default Profile;
