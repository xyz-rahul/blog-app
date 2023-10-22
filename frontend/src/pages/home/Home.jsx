import axios from 'axios';
import BlogCard from '../../components/card/BlogCard';
import { base_url } from '../../api/API';
import { useEffect, useState } from 'react';


async function fetchBlogs() {
  const url = `${base_url}/blogs`;
  try {
    const response = await axios.get(url);
    const responseData = response.data;
    return responseData;
  } catch (error) {
    console.error('Error: not able to fetch from server', error);
  }
}

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const blogData = await fetchBlogs();
      setData(blogData);
    }

    fetchData();
  }, []);

  return (
    <>
      {data.map((item, index) => (
        <BlogCard key={index} title={item.title} content={item.description}/>
      ))}
    </>
  );
}
