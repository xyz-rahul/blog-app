import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <ul>
            <li className="nav-left-list-item">
              <NavLink to="/" className="nav-link">
                BlogAPP
              </NavLink>
            </li>
            <li className="nav-left-list-item">
              <NavLink to="/new-blog" className="nav-link">
                Write
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <div className="nav-button-container" >
            <button id="editor-button" style={{display:'none'}} className="nav-right-item button">Publish</button>
          </div>
          <input className="nav-right-item" type="text" />
          <div className="nav-button-container">
            <button className="nav-right-item button">Login/SignUp</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
