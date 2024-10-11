import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import ThemeProvider from "./themeContext/Theme.jsx";
import { Store } from "./Store/Store.js";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={Store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
