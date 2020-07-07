import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const changeManager = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value }); // with this method we can dynamically change the value of the inputs with different names copy former object with ... operator then replace value with the given value from each input

  const submitManager = async (e) => {
    e.preventDefault();
    const loginUser = {
      email,
      password,
    };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(loginUser);
      const res = await axios.post("/api/auth", body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead text-swifter">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      <form className="form" onSubmit={(e) => submitManager(e)}>
        <div className="form-group">
          <input
            className="rounder-5"
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => changeManager(e)}
          />
        </div>
        <div className="form-group">
          <input
            className="rounder-5"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => changeManager(e)}
            minLength="6"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1 text-swifter">
        Don't have an account <Link to="/register">Sign up</Link>
      </p>
    </Fragment>
  );
};

export default Login;
