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
  const [value, setValue] = useState("");

  // called whenever the user types in the new post input box
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // called when the user hits "Submit" for a new post
  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit && props.onSubmit(value);
    setValue("");
  };

  // TODO add in other fields later
  return (
    <>
    <div>
        Please enter your profile information.
    </div>
    <div className="u-flex">
      <input
        type="text"
        placeholder="Graduation year"
        value={value}
        onChange={handleChange}
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