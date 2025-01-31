import React from "react";

const Register = () => {
  function handleSubmit() {
    console.log("Hello there!");
  }

  return (
    <div>
      <form action="">
        <input type="text" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input
          type="password"
          name="repeatPassword"
          id="repeatPassword"
          placeholder="Repeat Password"
        />
        <button onClick={() => handleSubmit()}>Register</button>
      </form>
    </div>
  );
};

export default Register;
