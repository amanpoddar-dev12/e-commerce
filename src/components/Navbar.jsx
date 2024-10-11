import { useContext } from "react";
import UserContext from "../themeContext/ThemeContext";

import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { CiLight, CiDark } from "react-icons/ci";
import Search from "./Search"; // Assuming Search is a child component
import Filter from "./Filter";

const navigation = [
  { name: "Store", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
  { name: "Filter", href: "#", current: false },
];

// Utility function to join class names
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const { toggleDarkMode, darkMode } = useContext(UserContext);

  const handleSearch = (query) => {
    console.log("Searching for:", query);
    // Implement search logic (API call, filtering, etc.)
  };

  return (
    <Disclosure as="nav" className="dark:bg-gray-900 bg-white">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo */}

          <div className="flex flex-1 items-center justify-start ml-3 md:ml-0 sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img
                alt="Your Company"
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
              />
            </div>

            {/* Search Component */}
            <div className="ml-2 md:ml-96">
              <Search onSearch={handleSearch} />
            </div>
            <div className="ml-2">
              {" "}
              <Filter />
            </div>
          </div>

          {/* Right Side: Dark mode toggle and user menu */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="sr-only">Open user menu</span>
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="h-8 w-8 rounded-full"
                />
              </MenuButton>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md border-white border-x-2 border-y-2 bg-white dark:bg-slate-900 py-1 shadow-lg ring-1 ring-black ring-opacity-5">
                <MenuItem>
                  {() => (
                    <a
                      href="#"
                      className={
                        "block px-4 py-2 text-sm text-white hover:dark:bg-slate-800"
                      }
                    >
                      <button
                        type="button"
                        className="dark:text-white text-black "
                        onClick={toggleDarkMode}
                      >
                        <span className="sr-only">Toggle Dark Mode</span>
                        {darkMode ? (
                          <CiLight className="w-7 h-7" />
                        ) : (
                          <CiDark className="w-7 h-7" />
                        )}
                      </button>
                    </a>
                  )}
                </MenuItem>
                <MenuItem>
                  {
                    <a
                      href="#"
                      className={
                        "block px-4 py-2 text-sm dark:text-white hover:dark:bg-slate-800"
                      }
                    >
                      Wishlist
                    </a>
                  }
                </MenuItem>
                <MenuItem>
                  {
                    <a
                      href="#"
                      className={
                        "block px-4 py-2 text-sm dark:text-white hover:dark:bg-slate-800"
                      }
                    >
                      Your Profile
                    </a>
                  }
                </MenuItem>
                <MenuItem>
                  {
                    <a className="block px-4 py-2 text-sm dark:text-white hover:dark:bg-slate-800">
                      Settings
                    </a>
                  }
                </MenuItem>
                <MenuItem>
                  {
                    <a
                      href="#"
                      className={
                        "block px-4 py-2 text-sm dark:text-white hover:dark:bg-slate-800"
                      }
                    >
                      Sign out
                    </a>
                  }
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
