import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";
import { BrowserRouter } from "react-router";
import { CustomRoutes } from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
  </StrictMode>
);
