import React, { useState } from "react";

import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Navigate, redirect, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [userDetail, setUserDetail] = useState({
    name: null,
    email: null,
    password: null,
  });

  const navigate = useNavigate();
  function submitSignUpForm(e) {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, userDetail.email, userDetail.password)
      .then((userCredential) => {
        const user = userCredential.user;

        updateProfile(user, {
          displayName: userDetail.name,
        })
          .then(() => {})
          .catch((error) => {
            // An error occurred
            // ...
          });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("can not create user ", errorCode, errorMessage);
      });
  }

  return (
    <div>
      <form className="authentication-form" onSubmit={submitSignUpForm}>
        <div>
          <label htmlFor="name">name</label>
          <input
            id="name"
            type="text"
            onChange={(e) =>
              setUserDetail({ ...userDetail, name: e.target.value })
            }
          ></input>
        </div>

        <div>
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="text"
            onChange={(e) =>
              setUserDetail({ ...userDetail, email: e.target.value })
            }
          ></input>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="text"
            onChange={(e) =>
              setUserDetail({ ...userDetail, password: e.target.value })
            }
          ></input>
        </div>

        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </div>
  );
}
