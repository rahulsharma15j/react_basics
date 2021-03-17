import React from "react";

const Option = (props) => (
  <div>
    <div>Option: {props.optionText}</div>{" "}
    <button
      onClick={(e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
