import React, { createContext, useEffect, useState } from "react";

const BlogContext = createContext({});

const BlogContextProvider = ({ children }) => {
  // Function to get blog title
  function getBlogTitle() {
    return localStorage.getItem("title");
  }

  // Function to set blog title
  function setBlogTitle(title) {
    localStorage.setItem("title", title);
  }

  // Function to get blog content
  function getBlogContent() {
    return localStorage.getItem("content");
  }

  // Function to set blog content
  function setBlogContent(content) {
    localStorage.setItem("content", content);
  }

  // Function to get blog content
  function getBlogSummary() {
    return localStorage.getItem("summary");
  }

  // Function to set blog content
  function setBlogSummary(summary) {
    localStorage.setItem("summary", summary);
  }
  return (
    <BlogContext.Provider
      value={{
        getBlogContent,
        getBlogTitle,
        setBlogContent,
        setBlogTitle,
        getBlogSummary,
        setBlogSummary,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogContextProvider };
