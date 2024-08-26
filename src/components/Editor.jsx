import React, { useContext, useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

import { BlogContext } from "../context/BlogContext";

export default function Editor({ initialValue, readOnly = false }) {
  const { getBlogContent, getBlogTitle, setBlogContent, setBlogTitle } =
    useContext(BlogContext);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  return (
    <ReactQuill
      readOnly={readOnly}
      theme="snow"
      onChange={setBlogContent}
      modules={modules}
      formats={formats}
    />
  );
}
