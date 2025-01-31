import React from "react";

const Login = () => {
  function handleSubmit() {
    console.log("Hello there!");
  }
  return (
    <div className="flex justify-center max-w-2xl w-1/3 m-10 bg-zinc-900">
      <form action="" className="flex flex-col w-full text-center">
        <input type="text" placeholder="Email" required />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
        <button onClick={(e) => handleSubmit(e)}>Login</button>
      </form>
    </div>
  );
};

export default Login;
