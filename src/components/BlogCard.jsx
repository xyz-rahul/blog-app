import React from "react";

export default function BlogCard({ id, title, summary, author }) {
  return (
    <a href={"blog/" + id}>
      <div className="blog-card">
        <h2 className="blog-card-title">{title}</h2>
        <h4 className="blog-card-title">{author}</h4>
        <div>{summary}</div>
      </div>
    </a>
  );
}
