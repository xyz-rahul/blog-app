import React from "react";

export default function Profile() {
  return (
    <div class="profile-container">
      <div class="profile-header">
        {/* <img src="profile-pic.jpg" alt="Profile Picture" class="profile-pic"> */}
        <h1 class="username">John Doe</h1>
        <p class="bio">Web Developer | Tech Enthusiast | Blogger</p>
      </div>
      <div class="profile-details">
        <h2>About Me</h2>
        <p>
          Hello! I'm John, a passionate web developer with a love for creating
          dynamic and user-friendly websites. I enjoy learning new technologies
          and sharing my knowledge through blogging.
        </p>
        <h2>Contact Information</h2>
        <p>Email: john.doe@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <h2>Social Media</h2>
        <p>
          <a href="#">LinkedIn</a> | <a href="#">Twitter</a> |{" "}
          <a href="#">GitHub</a>
        </p>
      </div>
    </div>
  );
}
