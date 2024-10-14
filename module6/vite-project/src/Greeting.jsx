import React from "react";

export default function Greeting(props) {
  return (
    <div className="componentBox">
      <h3>Welcome {props.name}!</h3>
    </div>
  );
}
