import { get } from '../../utilities';
import React, { useState, useEffect } from 'react';


function Matchfinder(props) {
  const [match, setMatch] = useState(null);
  const [user, setUser] = useState();

  
  useEffect(() => {
    get("/api/user", {_id: props.userId}).then((userObj) => setUser(userObj));
    //get("/api/swipes", {userId: props.userId })
    // get("/api/users", {users: props.users})
    // get("/api/whoami").then((userObj) => setUser(userObj));
    


  }, [props.users, props.userId]);

  useEffect(() => {
    if (user) {
        let matches = props.users.filter(ele => {
      ele.has_swipes !== user.has_swipes
    }
    );
    if (matches.length === 0) {
      setMatch(null);
    } else {
      const randomIndex = Math.floor(Math.random() * matches.length);
      setMatch(matches[randomIndex].id);
    }
    }
    
  }, [user]);
//   return (
//     <>
//         {match !== null ? (
//             <div>
//                 <p>Your match's id is: {match}</p>
//             </div>
//         ) : (
//             <div>No match found.</div>
//         )}
//     </>
// );

  return (
    <>
      <div>
        <p>Your match's id is: {match}</p>
      </div>
    </>
  );
  };


export default Matchfinder;
