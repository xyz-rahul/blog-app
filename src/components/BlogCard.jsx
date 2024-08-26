import React from "react";

export default function BlogCard({ id, title, content }) {
  return (
    <a href={"blog/"+id}>
      <div className="blog-card">
        <h2 className="blog-card-title">{title}</h2>
        <div>{content}</div>
      </div>
    </a>
  );
}
