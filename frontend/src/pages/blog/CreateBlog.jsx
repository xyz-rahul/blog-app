import "./Blog.css";
import EditorCustom from "../../components/editor/EditorCustom";
import { useEffect, useRef } from "react";
import axios from "axios";
import { base_url } from "../../api/API";
import { useNavigate } from "react-router-dom";

export default function CreateBlog() {
  const editor = useRef();
  const navigate = useNavigate();

  const extractData = async () => {
    const editorData = await editor.current.save();
    const jsonContent = JSON.stringify(editorData);

    const title = editorData.blocks[0].data.text;

    // const description = editorData.blocks[1].data.text;
    const description = 
            `Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.`;

    const postData = {
      title: title,
      description: description,
      content: jsonContent,
    };

    return postData;
  };
  const save = async () => {
    try {
      const url = `${base_url}/blogs`;
      const data = await extractData();

      const response = await axios.post(url, data);
      const responseData = response.data;

      navigate(`/blogs/view/${responseData.id}`);
    } catch (error) {
      console.log("Error: while saveing data", error);
    }
  };
  useEffect(() => {
    const publishButton = document.getElementById("editor-button");
    publishButton.style.display = "block";
    publishButton.style.backgroundColor = "green";

    publishButton.addEventListener("click", save);

    return ()=>{
        publishButton.style.display = "none";
    }
  }, []);
  return (
    <>
      <EditorCustom editorInstance={editor} />
    </>
  );
}
