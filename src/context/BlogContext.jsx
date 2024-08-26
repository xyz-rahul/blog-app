import React, { createContext, useEffect, useState } from "react";

const BlogContext = createContext({ title: null, value: null });

const BlogContextProvider = ({ children }) => {
  // Function to get blog title
  function getBlogTitle() {
    console.log("tttt");
    const a = localStorage.getItem("title");
    console.log("tttt", a);
    return localStorage.getItem("title");
  }

  // Function to get blog content
  function getBlogContent() {
    console.log("aaaa");
    const a = localStorage.getItem("content");
    console.log("aaaa", a);
    return localStorage.getItem("content");
  }

  // Function to set blog title
  function setBlogTitle(title) {
    localStorage.setItem("title", title);
  }

  // Function to set blog content
  function setBlogContent(content) {
    localStorage.setItem("content", content);
  }

  return (
    <BlogContext.Provider
      value={{ getBlogContent, getBlogTitle, setBlogContent, setBlogTitle }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogContextProvider };
