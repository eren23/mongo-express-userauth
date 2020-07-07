import React from "react";
import "./App.css";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={RegisterForm} />
        <Route exact path="/login" component={LoginForm} />
      </div>
    </Router>
  );
}

export default App;
