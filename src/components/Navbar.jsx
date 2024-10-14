import { useContext, useEffect, useState } from "react";
import UserContext from "../themeContext/ThemeContext";

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
import { Link, NavLink } from "react-router-dom";
// import { UserDetail } from "../context/UserDetailsContext";
import { FireBaseContext } from "../context/UserContext";
// import { FaRegQuestionCircle } from "react-icons/fa";
// import { CiSettings } from "react-icons/ci";
// import { CiSettings } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
export default function Navbar() {
  const { toggleDarkMode, darkMode } = useContext(UserContext);
  const { isLoggedIn, logout, user } = useContext(FireBaseContext);
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  const [imgSrc, setImgSrc] = useState(null);
  useEffect(() => {
    console.log(user);
    setImgSrc(user?.photoURL);
    console.log(imgSrc);
  }, [user, imgSrc]);
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
                ) : imgSrc ? (
                  <img
                    alt=""
                    src={imgSrc}
                    className="h-8 w-8 rounded-full  text-black dark:bg-slate-900 dark:text-white"
                  />
                ) : (
                  <img
                    alt=""
                    src={
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                    }
                    className="h-8 w-8 rounded-full  text-black dark:bg-slate-900 dark:text-white"
                  />
                )}
              </MenuButton>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md border-white border-x-2 border-y-2 bg-white dark:bg-slate-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <MenuItem>
                  {() => (
                    <button
                      type="button"
                      className="dark:text-white text-black block w-full text-left px-4 py-2 text-sm"
                      onClick={toggleDarkMode}
                    >
                      <span className="sr-only">Toggle Dark Mode</span>
                      {darkMode ? (
                        <CiLight className="w-7 h-7" />
                      ) : (
                        <CiDark className="w-7 h-7" />
                      )}
                    </button>
                  )}
                </MenuItem>
                {!isLoggedIn ? (
                  <MenuItem>
                    <Link
                      to={"/signup"}
                      className="block px-4 py-2 text-sm dark:text-white hover:dark:bg-slate-800"
                    >
                      Sign In
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
                    Home
                  </Link>
                </MenuItem>

                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm dark:text-white hover:dark:bg-slate-800"
                  >
                    Wishlist
                  </a>
                </MenuItem>
                <MenuItem>
                  <Link
                    to={"/profile"}
                    className="block px-4 py-2 text-sm dark:text-white hover:dark:bg-slate-800"
                  >
                    Your Profile
                  </Link>
                </MenuItem>

                {isLoggedIn ? (
                  <MenuItem onClick={logout}>
                    <a
                      href=""
                      className="block px-4 py-2 text-sm dark:text-white hover:dark:bg-slate-800"
                    >
                      Sign out
                    </a>
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
