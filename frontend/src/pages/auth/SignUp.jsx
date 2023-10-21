
import { Link } from "react-router-dom";
import "./Login-SignUp.css";

const Signup = () => {
  return (
    <div className="form-wrapper">
      <form method="post" className="form">
        <span className="title">Sign Up</span>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="options">
          <Link to="/login" className="link">Login</Link>
        </div>
        <button type="submit" className="login-button">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
