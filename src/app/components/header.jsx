import {
  mapIcon,
  dropdownIcon,
  phoneIcon,
  searchIcon,
  heartIcon,
  hamburgerIcon,
  userIcon,
  bagIcon,
} from "../../assets/icons";
import { logo } from "../../assets/images";
import Image from "next/image";
import NavLink from "./navLink";

export default function Header() {
  return (
    <header className="mx-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 my-4">
        <div className="flex">
          <Image src={mapIcon} alt="location" />
          <p className="ml-2 text-gray-500">
            Store Location: Lincoln- 344, Illinois, Chicago, USA
          </p>
        </div>
        <div className="flex items-center justify-center lg:justify-end mt-6 lg:mt-0">
          <span className="flex">
            <span className="mr-2 text-grey-500">Eng</span>
            <Image src={dropdownIcon} alt="location" className="h-4 w-4" />
          </span>
          <span className="flex ml-5">
            <span className="mr-2 text-grey-500">USD</span>
            <Image src={dropdownIcon} alt="location" className="h-4 w-4" />
          </span>
        </div>
      </div>

      {/* borer */}
      <div className="border border-gray-400"></div>

      {/* Brand logos */}
      <div className="grid grid-cols-12 mx-10 py-6">
        <div className=" w-full b-200 col-span-12 lg:col-span-2 flex items-center justify-center">
          <div>
            <Image src={logo} alt="logo" width={"w-36"} height={"h-9"} />
          </div>
        </div>
        <div className=" w-full col-span-12 lg:col-span-8 flex items-center justify-center my-10 lg:my-0">
          <div className="flex">
            <div className="flex items-center border border-grey-100 rounded-r-none border-r-0 rounded overflow-hidden">
              <div className="flex items-center py-3 pl-4">
                <label htmlFor="searchInput">
                  <Image src={searchIcon} alt="Search" />
                </label>
                <input
                  type="text"
                  id="searchInput"
                  placeholder="Search"
                  className="outline-none ml-4 w-full lg:w-64 text-body-tiny lg:text-body-small"
                />
              </div>
            </div>
            <button className="bg-success text-white text-body-tiny lg:text-body-small py-1 lg:py-3 px-2 lg:px-6 rounded-r">
              Search
            </button>
          </div>
        </div>
        <div className=" w-full col-span-12 lg:col-span-2 flex items-center justify-center lg:justify-end ">
          <div className="flex items-center">
            <Image src={phoneIcon} alt="phone" width={"w-10"} height={"h-10"} />
            <div className="ml-3">
              <p className="text-body-small text-gray-400">Customer Services</p>
              <p className="text-body-xl font-medium text-grey-900">
                (219) 555-0114
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* menu icons */}
      <div className="grid grid-cols-12 bg-gray-900 lg:pr-6 flex-wrap">
        <div className="col-span-12 lg:col-span-10">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-4 flex items-center">
              <div className="p-4 bg-success">
                <Image
                  src={hamburgerIcon}
                  alt="Menu icon"
                  className="h-8 w-8"
                />
              </div>

              <div className="flex items-center justify-between bg-grey-800 py-5 pl-4 pr-6 w-full lg:w-[25.5rem]">
                <span className="text-white">All Categories</span>
                <Image src={dropdownIcon} alt="down-icon" className="w-5 h-5" />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8 flex items-center justify-center lg:justify-start">
              <div className="grid grid-cols-1 lg:grid-cols-6 ">
                <NavLink title="Home" active />
                <NavLink title="Shop" />
                <NavLink title="Pages" />
                <NavLink title="Blogs" />
                <NavLink title="About Us" hideIcon />
                <NavLink title="Contact Us" hideIcon />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-2">
          <div className="flex items-center justify-center lg:justify-end">
            <div className="py-4">
              <Image src={heartIcon} alt="heart" className="w-8 h-8" />
            </div>
            <div className="py-4 relative">
              <Image src={bagIcon} alt="heart" className="w-8 h-8 mx-6" />
              <span className="text-white absolute top-3 right-5 text-[10px] w-5 h-5 bg-success-dark flex items-center justify-center rounded-full border border-gray-800 ">
                2
              </span>
            </div>
            <div className="py-4">
              <Image src={userIcon} alt="heart" className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
