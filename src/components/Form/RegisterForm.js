import { useState } from "react";

import Card from "../shared/Card";
import Style from "./Form.module.css";

const RegisterForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLogin = (event) => {
    const { name, value } = event.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const URL = "";
    const userData = JSON.stringify(user);
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: userData,
    };

    const response = await fetch(URL, options);
    console.log(response);
  };
  return (
    <Card>
      <div className={Style["center"]}>
        <h1>Todo</h1>
        <form onSubmit={submitHandler}>
          <div className={Style["inputbox"]}>
            <input type="text" name="username" required="required" onChange={handleLogin} />
            <span>Username</span>
          </div>
          <div className={Style["inputbox"]}>
            <input type="text" name="email" required="required" onChange={handleLogin} />
            <span>Email</span>
          </div>
          <div className={Style["inputbox"]}>
            <input type="password" name="password" required="required" onChange={handleLogin} />
            <span>Password</span>
          </div>
          <div className={Style["inputbox"]}>
            <button type="submit" className={Style["btn"]}>
              Register
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default RegisterForm;
