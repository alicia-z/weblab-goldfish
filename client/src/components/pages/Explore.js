import React, { useState, useEffect } from "react";

import { get } from "../../utilities";

const Explore = (props) => {
  const [users, setUsers] = useState([]);

  // called when the "Feed" component "mounts", i.e.
  // when it shows up on screen
  useEffect(() => {
    get("/api/users").then((userObjs) => {
      setUsers(userObjs)
    });
  }, []);

  // TODO change later to something more informative
  // if user is not signed in
  if (!props.userId) {
    return (
      <div>
        Welcome! Please sign in.
      </div>
    );
  }

  return (  
    <div> 
      <img src="gf1.PNG" />
      users list: {JSON.stringify(users)} 
    </div>   
  )
};

export default Explore;
