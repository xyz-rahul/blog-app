import { useEffect} from "react";
import "./EditBlog.css";
import EditorJS from "@editorjs/editorjs";
import { toolOptions } from "./EditorConfig";


export default function EditBlog({editorInstance, data=null}) {
  // const editorInstance = useRef();
  // const data = useLoaderData();

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
        autofocus: true,
        // data: DEFAULT_INITIAL_DATA, //used to provide default data
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
      console.log("server", data);
      localStorage.setItem("editor-content", JSON.stringify(data));
    }

    initializeEditor();
    return destroyEditor();
  }, []);

  return (
    <>
      <div id="editorjs"></div>
    </>
  );
}