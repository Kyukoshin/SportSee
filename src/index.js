import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./main.scss";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
