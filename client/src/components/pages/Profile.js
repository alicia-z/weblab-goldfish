import React, { useState, useEffect } from "react";
import { get } from "../../utilities"
import { post } from "../../utilities";
import NewProfile from "../modules/NewProfile.js"


import "../../utilities.css";

const Profile = (props) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    document.title = "Profile Page";
    if (props.userId) {
      get("/api/user", {_id: props.userId}).then((userObj) => {
        console.log(userObj)
        setUser(userObj)});
    }
    //get("/api/whoami").then((userObj) => setUser(userObj));
    //
  }, [props.userId]); 
  // IMPORTANT: user will log in again when refresh, isn't instantaneous so should add props.userId to dependency array

  // useEffect(()=> {
  //   console.log(props.userId)
    
  // }, [props.userId]);

  if (!user) {
    return (<div> Loading! </div>);
  }

  // if user is signed in but is new user
  // if (props.userId && (user.grad_year === 0 || user.grad_year == undefined)) {
    
  // }
  const updateUser = (grad_year, has_swipes, major, gender) => {
      // console.log(JSON.stringify(user))
      let has_swipes_bool = (has_swipes === "T")
      // console.log(has_swipes_bool)
      // let grad_year1 = user.grad_year ? grad_year === "" : grad_year
      // console.log(user.grad_year)
      // console.log(grad_year)
      post("/api/profileinfo", {googleid: user.googleid, grad_year: grad_year, has_swipes: has_swipes_bool, major: major, gender: gender}).then((userObj) => {
          setUser(userObj)
          // console.log("HAS SWIPES?")
          // console.log(user.has_swipes)
      });

    };


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
        Has Swipes: {user.has_swipes ? "T" : "F"}
      </div>
      <div>
        Major: {user.major}
      </div>
      
      <NewProfile onSubmit={updateUser} /> 
    </>
  );
};


export default Profile;
