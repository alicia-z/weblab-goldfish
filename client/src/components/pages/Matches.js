import React, { useState, useEffect } from "react";
import { get } from "../../utilities"

import "../../utilities.css";

const Matches = (props) => {
  const [user, setUser] = useState();

  useEffect(() => {
    document.title = "Profile Page";
    get("/api/users").then((userObj) => setUser(userObj));
  }, []);

  if (!user) {
    return (<div> Loading! </div>);
  }

  // TODO: change later to include match info
  return (
    <>
      <h2><center>
        Your Matches
        </center></h2>
      <div>
        No matches yet!
        users list: {JSON.stringify(user)} 
      </div>
    </>
  );
};

export default Matches;

/*

//users list: {JSON.stringify(user)} 

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

*/