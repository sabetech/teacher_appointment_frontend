import React from "react";

const Login = () => {
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="email" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
