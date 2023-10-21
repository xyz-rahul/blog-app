import { Link } from "react-router-dom";
import "./Login-SignUp.css";

const Login = () => {
  return (
    <div className="form-wrapper">
      <form method="post" className="form">
        <span className="title">Login</span>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
          />
        </div>
        <div className="options">
          <Link to="/signup" className="link">
            SignUp
          </Link>
          <span className="divider"> | </span>
          <Link to="/forgot-password" className="link">
            Forgot Password
          </Link>
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
