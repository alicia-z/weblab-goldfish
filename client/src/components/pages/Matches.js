import React, { useState, useEffect } from "react";
import { get } from "../../utilities"

import "../../utilities.css";

const Matches = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    document.title = "Profile Page";
    get("/api/whoami").then((userObj) => setUser(userObj));
  }, []);

  if (!user) {
    return (<div> Loading! </div>);
  }

  // TODO: change later to include match info
  return (
    <>
      <div>
        No matches yet!
      </div>
    </>
  );
};

export default Matches;
