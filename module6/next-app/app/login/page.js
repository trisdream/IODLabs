"use client";

import { useState } from "react";

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 3;

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit

    if (attempts >= maxAttempts) {
      setSubmitResult("Maximum login attempts exceeded.");
      return;
    }

    // add some password validation
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else if (userPassword.length > 20) {
      setSubmitResult("Password must not exceed 20 characters");
    } else {
      setSubmitResult("Successful login.");
      setUserEmail("");
      setUserPassword("");
      setAttempts(0);
      return;
    }
    setAttempts((prev) => prev + 1);
  };

  const formVisible =
    attempts < maxAttempts && submitResult !== "Successful login.";

  return (
    <div className="LoginForm componentBox">
      <div className="formRow ">
        <label>
          Email Address:
          {/* Controlled form element needs both value and onChange.
onChange handler uses event param e to access target value.
Whenever user types, new value is stored in state. */}
          <input
            className=" text-black"
            type="email"
            value={userEmail}
            name="userEmail"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="formRow">
        <label>
          Password:
          <input
            className=" text-black"
            type="password"
            value={userPassword}
            name="password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </label>
      </div>
      <form onSubmit={handleSubmit}>
        {/* same form code as previously, BUT now includes
<form> and <button> */}
        <button>Log In</button>
        <p>{submitResult}</p>
      </form>
    </div>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;
