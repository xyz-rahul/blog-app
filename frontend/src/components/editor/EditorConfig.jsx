import Header from "@editorjs/header";
import List from "@editorjs/list";
import CodeTool from "@editorjs/code";
import Table from "@editorjs/table";

class Title {
  constructor({ data }) {
    // Extract the title from the data object
    this.title = data.title;
  }

  static get toolbox() {
    return {
      title: "Title", // The title displayed in the EditorJS toolbox
    };
  }

  render() {
    // Create the title input element
    const titleInput = document.createElement("input");
    titleInput.value = this.title;
    titleInput.placeholder = "Enter a title";
    titleInput.className = "cdx-title-input"; // You can add a custom CSS class

    // Apply custom CSS styles to the title input element
    titleInput.style.border = "none"; // Remove the border
    titleInput.style.outline = "none"; // Remove the outline
    titleInput.style.background = "transparent"; // Make the background transparent
    titleInput.style.fontSize = "50px"; // Set the font size to 50px
    titleInput.style.fontWeight = "bold"; // Set the font weight to bold
    titleInput.style.fontFamily = "Montserrat, sans-serif"; // Use the Montserrat font with a fallback to sans-serif

    //titleInput.style.color = 'your-custom-color'; // Set a custom text color

    return titleInput;
  }

  save(blockContent) {
    return {
      title: blockContent.value,
    };
  }
}
const toolOptions = {
  header: {
    class: Header,
    inlineToolbar: true,
    config: {
      placeholder: "Enter a header",
      levels: [1, 2, 3, 4, 5],
      defaultLevel: 3,
    },
  },
  list: {
    class: List,
    inlineToolbar: true,
  },
  code: CodeTool,
  table: {
    class: Table,
    inlineToolbar: true,
    config: {
      rows: 2,
      cols: 3,
    },
  },

  //custom
  title: {
    class: Title,
  },
}
export { toolOptions};
