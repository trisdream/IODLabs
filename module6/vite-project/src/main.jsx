import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorMessage } from "../components/ErrorMessage.jsx";
import "./index.css";
import App from "../App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorMessage}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
