import React, { useContext, useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import BlogCard from "../components/BlogCard";
import { AuthenticationContext } from "../context/Authentication";

export default function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const { user, signOut } = useContext(AuthenticationContext);

  useEffect(() => {
    const fetchBlogs = async () => {
      const q = query(
        collection(db, "blogs"),
        where("uid", "==", user.uid),
      );
      const querySnapshot = await getDocs(q);

      // const querySnapshot = await getDocs(collection(db, "blogs"));
      const blogsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsData);
    };

    fetchBlogs();
  }, [user]);

  return (
    <div className="dashboard">
      {blogs.map((blog) => (
        <BlogCard
          key={blog.id}
          id={blog.id}
          title={blog.title}
          author={blog.author}
          summary={blog.summary}
        />
      ))}
    </div>
  );
}
