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
        MY PROFILE
      </div>
      <div>
        Name: {user.name}
      </div>
      <div>
        Gender: 0
      </div>
      <div>
        Year of Graduation: 0
      </div>
      <div>
        Has Swipes: True
      </div>
      <div>
        Major: 0
      </div>
    </>
  );
};


export default Profile;
