import { get } from 'core-js/core/dict';
import React, { useState, useEffect } from 'react';


function Matchfinder(props) {
  const [match, setMatch] = useState(null);
  
  useEffect(() => {
    // get("/api/swipes", {userId: props.userId })
    const matches = props.users.filter(
      u => u.has_swipes !== props.user.has_swipes
    );
    if (matches.length === 0) {
      setMatch(null);
    } else {
      const randomIndex = Math.floor(Math.random() * matches.length);
      setMatch(matches[randomIndex].id);
    }
  }, [users, user]);

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
