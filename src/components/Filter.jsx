import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoFilter } from "react-icons/io5";
import { useDispatch } from "react-redux";
import {
  Clothes,
  Electronics,
  Furniture,
  resetFilters,
  Shoes,
} from "../Features/productSlice";
export default function Filter() {
  const dispatch = useDispatch();
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900  shadow-sm ring-1 ring-inset  ">
          <IoFilter
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>
      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md dark:text-white bg-white shadow-lg ring-1 ring-black dark:bg-slate-900 ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              onClick={() => {
                dispatch(resetFilters());
              }}
              className="block px-4 py-2 text-sm dark:text-white hover:dark:text-black data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              All
            </a>
          </MenuItem>
          <MenuItem>
            <a
              onClick={() => {
                dispatch(Clothes());
              }}
              className="block px-4 py-2 text-sm dark:text-white hover:dark:text-black data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Clothes
            </a>
          </MenuItem>
          <MenuItem>
            <a
              onClick={() => dispatch(Furniture())}
              className="block px-4 py-2 text-sm dark:text-white hover:dark:text-black data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Furniture
            </a>
          </MenuItem>
          <MenuItem>
            <a
              onClick={() => dispatch(Electronics())}
              className="block px-4 py-2 text-sm dark:text-white hover:dark:text-black data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Electronics
            </a>
          </MenuItem>

          <MenuItem>
            <a
              onClick={() => dispatch(Shoes())}
              type="submit"
              className="block w-full px-4 py-2 text-left text-sm hover:dark:text-black dark:text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Shoes
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
}
