import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthenticationContextProvider } from "./context/Authentication";
import { BlogContextProvider } from "./context/BlogContext";

import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthenticationContextProvider>
      <BlogContextProvider>
        <App />
      </BlogContextProvider>
    </AuthenticationContextProvider>
  </StrictMode>,
);
