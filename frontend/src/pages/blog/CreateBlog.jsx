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
    const description = "description";

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
  }, []);
  return (
    <>
      <EditorCustom editorInstance={editor} />
    </>
  );
}
