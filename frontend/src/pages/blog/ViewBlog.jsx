import './Blog.css';
import EditorCustom from '../../components/editor/EditorCustom';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { base_url } from '../../api/API';



export default function ViewBlog() {
  const editor = useRef();
  const [data, setData] = useState(); // Import 'useState' from React
  const {id} = useParams();
  // const save = async () => {
  //   editor.current
  //     .save()
  //     .then((outputData) => {
  //       console.log("Article data: ", outputData);
  //     })
  //     .catch((error) => {
  //       console.log("Saving failed: ", error);
  //     });
  // };

  const loadDataFromServer = async () => {
    const url = `${base_url}/blogs/${id}`;
    const response = await axios.get(url);
    const responseData = response.data;
    const content = responseData;
    setData(content);
  }

  useEffect(() => {
    // const publishButton = document.getElementById('editor-button');
    // publishButton.style.display = "block";
    // publishButton.style.backgroundColor = "green";
    // publishButton.addEventListener('click', save);
    loadDataFromServer();
  }, []);

  return (
    <>
      {data ? <EditorCustom editorInstance={editor} data={data}  readOnly={true} /> : <h1>error</h1>}
    </>
  );
}
