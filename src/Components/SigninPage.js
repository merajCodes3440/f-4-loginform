import React, { useState } from "react";

const SigninPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(e) {
    e.preventDefault();
    alert(username, password);
  }

  //  function submit(){
  //    alert(username,password);
  //  }

  return (
    <div className="mainContainer">
      <form className="container" onSubmit={submitForm}>
        <p>Welcome back!👋</p>
        <h1>Sign in to your Account</h1>
        <div className="input-div">
          <label className="my-label" htmlFor="email">
            Your Email
          </label>
          <input
            type="text"
            id="email"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            value={username}
          />
        </div>
        <div className="input-div">
          <label className="my-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
          />
        </div>
        <div className="btnc">
          <button id="btn">Continue</button>
        </div>
        <div className="ptext">
          <p id="p1">Forget your password?</p>
        </div>
        <div className="ptext">
          <p id="p2">
            Don't have Account? <a href="#">Signup</a>
          </p>
        </div>
      </form>
    </div>
  );
};
export default SigninPage;
