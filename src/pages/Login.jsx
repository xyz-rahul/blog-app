import React, { useState } from "react";

import { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userDetail, setUserDetail] = useState({
    email: null,
    password: null,
  });
  const navigate = useNavigate();

  function submitSignUpForm(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, userDetail.email, userDetail.password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("can not create user ", errorCode, errorMessage);
      });
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={submitSignUpForm}>
        <div className="form-item">
          <h1>Login</h1>
        </div>
        <div className="form-item">
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="text"
            onChange={(e) =>
              setUserDetail({ ...userDetail, email: e.target.value })
            }
          ></input>
        </div>
        <div className="form-item">
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="text"
            onChange={(e) =>
              setUserDetail({ ...userDetail, password: e.target.value })
            }
          ></input>
        </div>

        <div className="form-item">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>

        <div className="form-item">
          <p>
            <a href={"/sign-up"}>sign up</a>
          </p>
        </div>
      </form>
    </div>
  );
}
