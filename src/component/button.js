import React from "react";

const Button = props => {
  return (
    <div
      className="button"
      onClick={() => props.change(props.movieCategory.urlText)}
    >
      <div>{props.movieCategory.buttonText}</div>
    </div>
  );
};

export default Button;
