import React, { useState, useEffect } from "react";
import Matchfinder from "../modules/matchfinder";
import { get } from "../../utilities";
import { post } from "../../utilities";

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

  const updateMatch = (match) => {
    // let grad_year1 = user.grad_year ? grad_year === "" : grad_year
    // console.log(user.grad_year)
    // console.log(grad_year)
    post("/api/profileinfo", {googleid: props.userId, new_match: match, grad_year: undefined, major: undefined, gender: undefined, has_swipes: undefined})
    //.then((userObj) => { setUser(userObj)});
  };

  return (  
    <div> 
        <h2><center>
        EXPLORE 
        </center></h2>
      {/* users list: {JSON.stringify(users)}  */}
      <Matchfinder users={users} userId={props.userId} onSubmit = {updateMatch} />
    </div>   
  )
};

export default Explore;
