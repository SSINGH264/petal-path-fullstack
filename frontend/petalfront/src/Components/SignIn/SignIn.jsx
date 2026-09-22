import {useState} from "react";
import { Link } from "react-router-dom";

import "./SignIn.css";

// creating sign in form
const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

// using state to store input values
   const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signed in as: " + email);
  };

// creating the form
  return (
    <div className="signin-form">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
     <div className="signin-extra">
        <p>Don't have an account?</p>
        <Link to="/signup" className="join-link">
          Join today!
        </Link>
      </div>

    </div>
  );
};

export default SignInForm;