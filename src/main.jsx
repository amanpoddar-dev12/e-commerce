import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ThemeProvider from "./context/themeContext/Theme.jsx";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import FireBaseProvider from "./context/authentication/UserContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";

import Loader from "./components/Loader.jsx";
import Pagelayout from "./Pagelayout.jsx";
import Home from "./pages/Home.jsx";
import { ToastBar, Toaster } from "react-hot-toast";

const ViewProduct = lazy(() => import("./pages/ViewProduct.jsx"));
const Order = lazy(() => import("./pages/Order.jsx"));
const Store = lazy(() => import("./pages/Store.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));
const Wishlist = lazy(() => import("./pages/Wishlist.jsx"));
const Cart = lazy(() => import("./pages/Cart.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Pagelayout />}>
      <Route
        index
        element={
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        }
      />

      <Route
        path="/store"
        element={
          <Suspense fallback={<Loader />}>
            <Store />
          </Suspense>
        }
      />
      <Route
        path="/products/:id"
        element={
          <Suspense fallback={<Loader />}>
            <ViewProduct />
          </Suspense>
        }
      />
      <Route path="/login" element={<SignIn />} />
      <Route
        path="/order"
        element={
          <Suspense fallback={<Loader />}>
            <Order />
          </Suspense>
        }
      />
      <Route
        path="/wishlist"
        element={
          <Suspense fallback={<Loader />}>
            <Wishlist />
          </Suspense>
        }
      />
      <Route
        path="/cart"
        element={
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        }
      />
      <Route path="/signup" element={<SignUp />} />
      {/* <Route path="/signin" element={<SignIn />} /> */}
      <Route
        path="/profile"
        element={
          <Suspense fallback={<Loader />}>
            <Profile />
          </Suspense>
        }
      />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <FireBaseProvider>
        <ThemeProvider>
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </ThemeProvider>
      </FireBaseProvider>
      <Toaster
        position="top-center"
        gutter={12}
        height={"20px"}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: {
            duration: 5000,
          },
          className: "dark:text-white",
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </QueryClientProvider>
  </StrictMode>
);
