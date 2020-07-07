import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;
  const changeManager = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitManager = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("passwords are not matching");
    }
    const newUser = {
      name,
      email,
      password,
    };

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify(newUser);
      const res = await axios.post("/api/users", body, config);
      console.log(res.data);
    } catch (err) {
      console.error(err.response.data);
    }
  };
  return (
    <div>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead text-swifter">
        <i className="fas fa-user text-swifter"></i> Create Your Account
      </p>
      <form className="form " onSubmit={(e) => submitManager(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={(e) => changeManager(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => changeManager(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => changeManager(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={(e) => changeManager(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1 text-swifter">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
