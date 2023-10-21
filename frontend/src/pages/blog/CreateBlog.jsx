import './Blog.css';
import EditorCustom from '../../components/editor/EditorCustom'
import { useEffect,useRef } from 'react';
// const data = {"time":1697904408341,"blocks":[{"id":"VsfFDwc8HX","type":"paragraph","data":{"text":"hello"}},{"id":"-TXrBznF2M","type":"paragraph","data":{"text":"sbsbdsbs"}},{"id":"S2wsT5ja_t","type":"paragraph","data":{"text":"vsd"}}],"version":"2.28.2"};

export default function CreateBlog() {
  const editor = useRef();
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
  useEffect(()=>{
    const publishButton = document.getElementById('editor-button');
    publishButton.style.display = "block";
    publishButton.style.backgroundColor = "green";

    publishButton.addEventListener('click', save);


  },[]);
  return (
    <>
    <EditorCustom editorInstance={editor}/>
    </>
  )
}
