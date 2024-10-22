import { useContext, useEffect, useState } from "react";
import UserContext from "../context/themeContext/ThemeContext";
import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { CiLight, CiDark } from "react-icons/ci";
import Search from "./Search";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import { FireBaseContext } from "../context/authentication/UserContext";
import { CiSettings } from "react-icons/ci";
import { useSelector } from "react-redux";

function Item({ src, name, quantity }) {
  return (
    <div className="flex flex-row gap-2 ">
      <img
        src={src}
        alt={name}
        width="24"
        height="24"
        className="filter transition-colors duration-200 dark:invert"
      ></img>
      {name}
      <span>{quantity}</span>
    </div>
  );
}
export default function Navbar() {
  const { cartProducts, wishlistProducts } = useSelector(
    (state) => state.product
  );

  const { toggleDarkMode, darkMode } = useContext(UserContext);
  const { isLoggedIn, logout, user } = useContext(FireBaseContext);
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };
  const [imgSrc, setImgSrc] = useState(null);
  useEffect(() => {
    console.log(user);
    setImgSrc(user?.photoURL);
    console.log("inside navbar profile");
    console.log(imgSrc);
    console.log(isLoggedIn);
  }, [user, imgSrc, isLoggedIn]);
  return (
    <Disclosure as="nav" className="dark:bg-gray-900 bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link to={"/"}>
                <img
                  alt="Your Company"
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </Link>
            </div>

            <div className="flex items-center gap-x-2 md:ml-60">
              <div className="flex-1">
                <Search onSearch={handleSearch} />
              </div>

              <div className="flex-shrink-0">
                <Filter />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Menu as="div" className="relative">
              <MenuButton className="relative flex rounded-full dark:bg-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="sr-only">Open user menu</span>
                {!isLoggedIn ? (
                  <CiSettings className="h-8 w-8 rounded-full" />
                ) : (
                  <img
                    alt=""
                    src={
                      imgSrc
                        ? imgSrc
                        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    }
                    className="h-8 w-8 rounded-full  text-black dark:bg-slate-900 dark:text-white "
                  />
                )}
              </MenuButton>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md border-white border-x-2 border-y-2 bg-white dark:bg-slate-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <MenuItem>
                  {
                    <button
                      type="button"
                      className="dark:text-white dark:hover:bg-slate-800 text-black block w-full text-left px-4 py-2 text-sm"
                      onClick={toggleDarkMode}
                    >
                      {darkMode ? (
                        <CiLight className="w-7 h-7" />
                      ) : (
                        <CiDark className="w-7 h-7" />
                      )}
                    </button>
                  }
                </MenuItem>
                {!isLoggedIn ? (
                  <MenuItem>
                    <Link
                      to={"/signup"}
                      className="block px-4 py-2 text-sm dark:text-white hover:dark:bg-slate-800"
                    >
                      <div className="flex flex-row gap-2">
                        <img
                          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                          alt="Aman"
                          width="24"
                          height="24"
                          className="filter transition-colors duration-200 dark:invert"
                        />
                        Log In
                      </div>
                    </Link>
                  </MenuItem>
                ) : (
                  ""
                )}
                <MenuItem>
                  <Link
                    to={"/"}
                    className="block px-4 py-2 text-sm dark:text-white hover:dark:bg-slate-800"
                  >
                    <Item
                      name={"Home"}
                      src={
                        "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/Store-9eeae2.svg"
                      }
                    />
                  </Link>
                </MenuItem>

                <MenuItem>
                  <Link
                    to={"/wishlist"}
                    className="block px-4 py-2 text-sm dark:text-white hover:dark:bg-slate-800"
                  >
                    <div className="flex flex-row">
                      <Item
                        name={"Wishlist"}
                        src={
                          "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDIwLjI0OUMxMiAyMC4yNDkgMi42MjUgMTQuOTk5IDIuNjI1IDguNjI0MDNDMi42MjUgNy40OTcwNSAzLjAxNTQ2IDYuNDA0ODggMy43Mjk5NiA1LjUzMzM0QzQuNDQ0NDUgNC42NjE3OSA1LjQzODg0IDQuMDY0NzIgNi41NDM5MyAzLjg0MzdDNy42NDkwMyAzLjYyMjY4IDguNzk2NTcgMy43OTEzNyA5Ljc5MTMxIDQuMzIxMDZDMTAuNzg2MSA0Ljg1MDc2IDExLjU2NjUgNS43MDg3NCAxMiA2Ljc0OTAzVjYuNzQ5MDNDMTIuNDMzNSA1LjcwODc0IDEzLjIxMzkgNC44NTA3NiAxNC4yMDg3IDQuMzIxMDZDMTUuMjAzNCAzLjc5MTM3IDE2LjM1MSAzLjYyMjY4IDE3LjQ1NjEgMy44NDM3QzE4LjU2MTIgNC4wNjQ3MiAxOS41NTU1IDQuNjYxNzkgMjAuMjcgNS41MzMzNEMyMC45ODQ1IDYuNDA0ODggMjEuMzc1IDcuNDk3MDUgMjEuMzc1IDguNjI0MDNDMjEuMzc1IDE0Ljk5OSAxMiAyMC4yNDkgMTIgMjAuMjQ5WiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                        }
                      />
                      <span>{`(${wishlistProducts.length})`}</span>
                    </div>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to={"/cart"}
                    className="block px-4 py-2 text-sm dark:text-white hover:dark:bg-slate-800"
                  >
                    <div className="flex flex-row ">
                      <Item
                        name={"Cart"}
                        src={
                          "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/header_cart-eed150.svg"
                        }
                      />
                      <span>{`(${cartProducts.length})`}</span>
                    </div>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to={"/order"}
                    className="block px-4 py-2 text-sm dark:text-white hover:dark:bg-slate-800"
                  >
                    <Item
                      src={
                        "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/orders-bfe8c4.svg"
                      }
                      name={"Orders"}
                    />
                  </Link>
                </MenuItem>
                {isLoggedIn ? (
                  <MenuItem>
                    <Link
                      to={"/profile"}
                      className="block px-4 py-2 text-sm dark:text-white hover:dark:bg-slate-800"
                    >
                      <Item
                        src={
                          "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/profile-52e0dc.svg"
                        }
                        name={"Your Profile"}
                      />
                    </Link>
                  </MenuItem>
                ) : (
                  ""
                )}
                {isLoggedIn ? (
                  <MenuItem onClick={() => logout()}>
                    <Link className="block px-4 py-2 text-sm dark:text-white hover:dark:bg-slate-800">
                      <Item
                        src={
                          "https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/logout-e63ddf.svg"
                        }
                        name={"Log out"}
                      />
                    </Link>
                  </MenuItem>
                ) : (
                  ""
                )}
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
