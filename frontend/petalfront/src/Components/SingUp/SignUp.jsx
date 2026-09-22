import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //creating validations for name, email & password

    if (!name.trim()) {
      setError("Name is a required field!")
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setError("Please enter a valid email!");
      return;
    }

    if (!password.trim()) { 
      setError("Password is required!");
      return;
}


  alert("Welcome to Your Petal Path Account " + name + "!");

  };

  // form for signing up
  return (
    <div className="signup-form">
      <h2>Create Account</h2>

      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <button type="submit">Sign Up</button>
      </form>

{/* creating routes to go back to the main page or signin */}

      <div className="signup-links">
        <Link to="/">Go Home</Link>
        <Link to="/signin">Already have an account?</Link>
      </div>
    </div>
  );
};

export default SignUp;