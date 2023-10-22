import { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import "./EditBlog.css";
import EditorJS from "@editorjs/editorjs";
import { toolOptions } from "./EditorConfig";

export default function EditBlog({
  editorInstance,
  data = null,
  readOnly = false,
}) {
  
  const customOption = readOnly ? { readOnly: true } : { autofocus: true };

  const setEditorFromLocalStorage = () => {
    const storedContent = localStorage.getItem("editor-content");
    if (storedContent && editorInstance.current) {
      const data = JSON.parse(storedContent);
      editorInstance.current.render(data);
    }
  };

  const initializeEditor = () => {
    if (editorInstance.current === null) {
      const editor = new EditorJS({
        holder: "editorjs",
        onReady: () => {
          editorInstance.current = editor;
          setEditorFromLocalStorage();
        },
        ...customOption,
        // autofocus: true,
        onChange: async () => {
          let content = await editor.saver.save();
          const data = JSON.stringify(content);
          localStorage.setItem("editor-content", data);
        },
        tools: toolOptions,
      });
    }
  };

  const destroyEditor = () => {
    editorInstance?.current?.destroy();
    editorInstance.current = null;
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem("editor-content", data.content);
    }
    initializeEditor();
    return destroyEditor();
  }, []);

  return <div id="editorjs"></div>;
}

// Define PropTypes
EditBlog.propTypes = {
  editorInstance: PropTypes.object,
  data: PropTypes.object,
  readOnly: PropTypes.bool,
};
