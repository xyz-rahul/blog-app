import React, { useState } from "react";

import { auth } from "../services/firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [userDetail, setUserDetail] = useState({
    name: null,
    email: null,
    password: null,
  });

  function submitSignUpForm(e) {
    e.preventDefault();
    console.log(userDetail);
    createUserWithEmailAndPassword(auth, userDetail.email, userDetail.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("user created", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("can not create user ", errorCode, errorMessage);
        // ..
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