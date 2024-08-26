import React, { useContext, useEffect, useState } from "react";
import Editor from "../components/Editor";
import { BlogContext } from "../context/BlogContext";
import { db } from "../services/firebase";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";

import { doc, getDoc } from "firebase/firestore";

export default function BlogPage() {
  let { id } = useParams();
  const { getBlogContent, getBlogTitle, setBlogContent, setBlogTitle } =
    useContext(BlogContext);
  const [blog, setBlog] = useState({ title: null, content: null });

  useEffect(() => {
    const docRef = doc(db, "blogs", id);
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        const data = docSnap.data();
        setBlog({ title: data.title, content: data.content });
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    });
  }, []);

  return (
    <div>
      <div>
        <label htmlFor="title">Title</label>
        <h1>{blog.title}</h1>
      </div>
      <Editor readOnly={true} initialValue={blog.content} />
    </div>
  );
}
