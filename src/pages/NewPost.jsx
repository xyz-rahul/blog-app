import React, { useContext, useEffect } from "react";
import Editor from "../components/Editor";
import { BlogContext } from "../context/BlogContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

export default function NewPost() {
  const { getBlogContent, getBlogTitle, setBlogContent, setBlogTitle } =
    useContext(BlogContext);

  async function onBlogSubmit() {
    console.log("submit blog button pressed");
    const title = getBlogTitle();
    const content = getBlogContent();

    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title,
        content,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          onChange={(e) => setBlogTitle(e.target.value)}
          defaultValue={getBlogTitle()}
        ></input>
      </div>
      <Editor />
      <button type="submit" onClick={onBlogSubmit}>
        Submit
      </button>
    </div>
  );
}
