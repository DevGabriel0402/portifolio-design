import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import { GlobalStyle } from "./globalStyles.js";
import Loading from "./Loading/Index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <Loading />
    <App />
  </StrictMode>
);
