import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css"
import { RouterProvider } from "react-router-dom";
import router from "./router/router";
import ThemeProvider from "./context/ThemeProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <StrictMode>
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
  // </StrictMode>
);