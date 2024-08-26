import React, { useContext, useEffect } from "react";
import Editor from "../components/Editor";
import { BlogContext } from "../context/BlogContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../context/Authentication";

export default function NewPost() {
  const {
    getBlogContent,
    getBlogTitle,
    setBlogContent,
    setBlogTitle,
    getBlogSummary,
    setBlogSummary,
  } = useContext(BlogContext);

  const { user, signOut } = useContext(AuthenticationContext);

  const author = user.displayName;
  const navigate = useNavigate();

  async function onBlogSubmit() {
    console.log("submit blog button pressed");
    const title = getBlogTitle();
    const content = getBlogContent();
    const summary = getBlogSummary();

    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title,
        content,
        author,
        summary,
      });
      console.log("Document written with ID: ", docRef.id);
      navigate(`/blog/${docRef.id}`);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div className="editor">
      <div className="item">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          onChange={(e) => setBlogTitle(e.target.value)}
          defaultValue={getBlogTitle()}
        ></input>
      </div>

      <div className="item">
        <label htmlFor="summary">Summary</label>
        <input
          type="text"
          onChange={(e) => setBlogSummary(e.target.value)}
          defaultValue={getBlogSummary()}
        ></input>
      </div>

      <div className="rich-text-editor ">
        <Editor />
      </div>
      <button type="submit" onClick={onBlogSubmit}>
        Submit
      </button>
    </div>
  );
}
