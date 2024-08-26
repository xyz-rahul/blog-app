import React from "react";

export default function BlogCard({ id, title, summary, author }) {
  return (
    <a href={"blog/" + id}>
      <div class="card">
        <h2 class="card-title">{title}</h2>
        <div class="card-content">
          <div class="card-left">
            <p class="card-date">August 26, 2024</p>
            <p class="card-author">{author}</p>
          </div>
          <div class="card-right">
            <p class="card-summary">{author}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
