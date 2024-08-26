import React, { useContext, useEffect } from "react";
import Editor from "../components/Editor";
import { BlogContext } from "../context/BlogContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../context/Authentication";

function validateForm({ title, summary, content }) {
  if (title.length < 10) {
    alert("Title must be at least 10 characters long.");
    return false;
  }

  if (content.length < 1000) {
    alert("Content must be at least 1000 characters long.");
    return false;
  }

  if (summary.length < 100) {
    alert("Summary must be at least 100 characters long.");
    return false;
  }

  return true;
}

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
  const uid = user.uid;
  const navigate = useNavigate();

  async function onBlogSubmit() {
    console.log("submit blog button pressed");
    const title = getBlogTitle();
    const content = getBlogContent();
    const summary = getBlogSummary();
    if (validateForm({ title, content, summary })) {
      try {
        const docRef = await addDoc(collection(db, "blogs"), {
          uid,
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
