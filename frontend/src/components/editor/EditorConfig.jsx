import Header from "@editorjs/header";
import List from "@editorjs/list";
import CodeTool from "@editorjs/code";
import Table from "@editorjs/table";

class Title {
  constructor({ data, config, api, readOnly }) {
    this.api = api;
    this.config = config;
    this.data = data;
    this.readOnly = readOnly;
  }
  static get isReadOnlySupported() {
    return true;
  }

  static get toolbox() {
    return {
      icon: "Ti",
      data: "Title",
    };
  }

  render() {
    // Create the title input element
    const titleInput = document.createElement("input");
    titleInput.value = this.data.text || "Enter Title";
    titleInput.className = "cdx-title-input"; // You can add a custom CSS class

    // Apply custom CSS styles to the title input element
    titleInput.style.border = "none"; // Remove the border
    titleInput.style.outline = "none"; // Remove the outline
    titleInput.style.background = "transparent"; // Make the background transparent
    titleInput.style.fontSize = "3.5rem"; // Set the font size to 50px
    titleInput.style.fontWeight = "700"; // Set the font weight to bold
    (titleInput.style.fontFamily = "Garamond"), "Montserrat, sans-serif"; // Use the Montserrat font with a fallback to sans-serif

    //titleInput.style.color = 'your-custom-color'; // Set a custom text color

    return titleInput;
  }

  save(blockContent) {
    return {
      text: blockContent.value,
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
};
export { toolOptions };
