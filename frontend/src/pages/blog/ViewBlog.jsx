import './Blog.css';
import EditorCustom from '../../components/editor/EditorCustom';
import { useEffect, useRef, useState } from 'react';

export default function ViewBlog() {
  const editor = useRef();
  const [data, setData] = useState(); // Import 'useState' from React

  const save = async () => {
    editor.current
      .save()
      .then((outputData) => {
        console.log("Article data: ", outputData);
      })
      .catch((error) => {
        console.log("Saving failed: ", error);
      });
  };

  const loadDataFromServer = async () => {
    // Simulated data from the server
    const sampleData = {
      "time": 1697904408341,
      "blocks": [
        { "id": "VsfFDwc8HX", "type": "paragraph", "data": { "text": "hello" } },
        { "id": "-TXrBznF2M", "type": "paragraph", "data": { "text": "sbsbdsbs" } },
        { "id": "S2wsT5ja_t", "type": "paragraph", "data": { "text": "vsd" } }
      ],
      "version": "2.28.2"
    };
    setData(sampleData);
  }

  useEffect(() => {
    const publishButton = document.getElementById('editor-button');
    publishButton.style.display = "block";
    publishButton.style.backgroundColor = "green";
    publishButton.addEventListener('click', save);
    loadDataFromServer();
  }, []);

  return (
    <>
      {data ? <EditorCustom editorInstance={editor} data={data} /> : <h1>error</h1>}
    </>
  );
}
