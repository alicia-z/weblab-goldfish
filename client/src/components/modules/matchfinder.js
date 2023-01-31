import { get } from '../../utilities';
import React, { useState, useEffect } from 'react';
import { _ } from 'core-js';

function Matchfinder(props) {
  const [match_id, setMatch_id] = useState(null);
  const [match, setMatch] = useState(null);
  const [matchYear, setMatchYear] = useState(null);
  const [matchMajor, setMatchMajor] = useState(null);
  const [user, setUser] = useState();
  let matches = []
 

  
  useEffect(() => {
    get("/api/user", {_id: props.userId}).then((userObj) => setUser(userObj));
    //get("/api/swipes", {userId: props.userId })
    // get("/api/users", {users: props.users})
    // get("/api/whoami").then((userObj) => setUser(userObj));
    


  }, [props.users, props.userId]);

  // useEffect(() => {
  //   if (user) {
      
    //   for(i = 0; i < props.users; i++) {
    //     if (props.users[i].has_swipes != user.has_swipes) {
    //       matches.push(props.users[i]);
    //     }
    //   }
    // }
  

  //     // let matches = props.users.filter(ele => ele.has_swipes != user.has_swipes     
  //   );
  //   console.log(user.has_swipes);
  //   console.log(props);
  //   console.log(matches)
  //   if (matches.size != 0) {
  //     const randomIndex = Math.floor(Math.random() * matches.length);
  //     setMatch(matches[randomIndex]);
  //     // setMatch(2);
    
  //   } else {
  //     setMatch(1);
  //   }
    
    
  // }, [user]);

  useEffect(() => {
    if (user) {
      for (let i=0; i < props.users.length; i++) {
        if (props.users[i].has_swipes != user.has_swipes){
          matches.push(props.users[i])
        }

      }
                    
      if (matches.length == 0) {
        setMatch(null);
        console.log(1)
      } else {  
        const randomIndex = Math.floor(Math.random() * matches.length);
        console.log(randomIndex)
        setMatch_id(matches[randomIndex]._id)
        setMatch(matches[randomIndex].name);
        setMatchYear(matches[randomIndex].grad_year)
        setMatchMajor(matches[randomIndex].major)
        console.log(2)
      }

    }
    
  }, [user]);

  console.log(matches);
  console.log(match);
  

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
        <p>Your match's name is: {match}</p>
        <p>Your match's graduation year is: {matchYear}</p>
        <p>Your match's major is: {matchMajor}</p>
      </div>
    </>
  );
  };


export default Matchfinder;
