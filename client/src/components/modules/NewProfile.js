import React, { useState } from "react";

import "./NewProfile.css";
import { post } from "../../utilities";

/**
 * New Post is a parent component for all input components
 *
 * Proptypes
 * @param {string} defaultText is the placeholder text
 * @param {string} storyId optional prop, used for comments
 * @param {({storyId, value}) => void} onSubmit: (function) triggered when this post is submitted, takes {storyId, value} as parameters
 */
const NewProfile = (props) => {
  const [grad_year, setGradYear] = useState("");
  const [has_swipes, setHasSwipes] = useState("");
  const [major, setMajor] = useState("");
  const [gender, setGender] = useState("");

  // called whenever the user types in the new post input box
  const handleChangeGradYear = (event) => {
    setGradYear(event.target.value);
  };
  const handleChangeHasSwipes = (event) => {
    setHasSwipes(event.target.value);
  };
  const handleChangeMajor = (event) => {
    setMajor(event.target.value);
  };
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };

  // called when the user hits "Submit" for a new post
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(grad_year, has_swipes, major, gender);
    setGradYear("");
    setHasSwipes("");
    setMajor("");
    setGender("");
  };

  // TODO add in other fields later
  return (
    <>
    <div>
        Please enter or edit your profile information.
    </div> 
    <div className="u-flex">
      <input
        type="text"
        placeholder="Graduation Year"
        value={grad_year}
        onChange={handleChangeGradYear}
        // className="NewPostInput-input"
      />
      {/* <datalist>
        <input list="has swipes"/>
        <option value="yes"/>
        <option value="no"/>
      </datalist> */}
      <input
        type="text"
        placeholder="Has Swipes?"
        value={has_swipes}
        onChange={handleChangeHasSwipes}
        // className="NewPostInput-input"
      />
    <input
        type="text"
        placeholder="Major"
        value={major}
        onChange={handleChangeMajor}
        // className="NewPostInput-input"
      />
    <input
        type="text"
        placeholder="Gender"
        value={gender}
        onChange={handleChangeGender}
        // className="NewPostInput-input"
      />
      <button
        type="submit"
        // className="NewPostInput-button u-pointer"
        value="Submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
    </>

  );
};

export default NewProfile;