import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import ThemeProvider from "./themeContext/Theme.jsx";
import { Provider } from "react-redux";
import store from "./Store/store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pagelayout from "./Pagelayout.jsx";
// import ProductItem from "./components/ProductItem.jsx";
import ViewProduct from "./components/ViewProduct.jsx";
import Login from "./components/SignUp.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Pagelayout />}>
      <Route path="" element={<Home />} />
      <Route path="/products/:id" element={<ViewProduct />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Route>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        {/* <App /> */}
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
