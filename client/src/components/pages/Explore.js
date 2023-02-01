import React, { useState, useEffect } from "react";
import Matchfinder from "../modules/matchfinder";
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
        <h2><center>
        EXPLORE 
        </center></h2>
      {/* users list: {JSON.stringify(users)}  */}
      <Matchfinder users={users} userId={props.userId} />
    </div>   
  )
};

export default Explore;
