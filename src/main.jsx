import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AuthenticationContextProvider } from "./context/Authentication";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthenticationContextProvider>
      <App />
    </AuthenticationContextProvider>
  </StrictMode>
);
