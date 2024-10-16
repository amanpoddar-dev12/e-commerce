import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeProvider from "./context/themeContext/Theme.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";

import {
  // BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Pagelayout from "./Pagelayout.jsx";
import ViewProduct from "./pages/ViewProduct.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
import FireBaseProvider from "./context/authentication/UserContext.jsx";
import Profile from "./pages/Profile.jsx";
import Order from "./pages/Order.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Cart from "./pages/Cart.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Pagelayout />}>
      <Route index element={<Home />} />
      <Route path="/products/:id" element={<ViewProduct />} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/order" element={<Order />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FireBaseProvider>
      <ThemeProvider>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </FireBaseProvider>
  </StrictMode>
);
