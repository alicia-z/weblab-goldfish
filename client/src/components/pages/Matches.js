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


  if (user.length == 0){
    return (<div>No matches yet!</div>)
  }
  //if ({JSON.stringify(user)}  == null) {
    //return (<div> No Matches YET </div>);
  //}

  // TODO: change later to include match info

  let user_new = user.filter(ele => {
    return ele.grad_year == 2026
  }).map (ele => {
    return <div>{JSON.stringify(ele)}</div>
  })

  return (
    <>
      <h2><center>
        Your Matches
        </center></h2>
      <div>

        users list: {user_new}
      </div>
      <div>
        
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