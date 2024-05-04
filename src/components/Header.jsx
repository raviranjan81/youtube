import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ytLogo from "../assets/images/logo-yt.png";
import Logo from "../assets/images/logo.svg";

import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/ContextApi";
import Loader from "../shared/Loader";
function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const { loading, mobileMenu, setMobileMenu } = useContext(Context);
  const navigate = useNavigate();
  const searctQueryHandler = (event) => {
    if (
      (event?.key == "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      //optional channing aage nhi check karega or program crash se bach jayega.
      navigate(`/searchResult/${searchQuery}`);
    }
    // if(searchQuery?.length > 0){
    //   navigate(`/searchResult/${searchQuery}`);
    // }
  };
  const mobileMenuToggel = () => {
    setMobileMenu(!mobileMenu);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

  return (
    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-white dark:bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggel}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}
        <Link to="/" className="flex h-5 items-center">
          <img
            src={Logo}
            className="h-full hidden dark:md:block text-white"
            alt="youtube"
          />
          <img src={ytLogo} className="h-full md:hidden" alt="youtube" />
        </Link>
       
      </div>
      <div className="group flex items-center">
          <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
            <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
              <IoIosSearch className="text-white text-xl" />
            </div>
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searctQueryHandler}
              value={searchQuery}
              className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
            />
          </div>
          <div onClick={()=>searctQueryHandler("searchButton")}  className="w-[40px] cursor-pointer md:w-[60px] h-8 md:h-10  items-center justify-center flex border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]">
            <IoIosSearch className="text-white text-xl" />
          </div>
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex">
            <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <RiVideoAddLine className="text-xl cursor-pointer text-white"/>
            </div>
            <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <FiBell className="text-xl cursor-pointer text-white"/>
            </div>
            <div className="flex overflow-hidden ml-2 h-8 w-8 md:ml-4 mt-1 rounded-full">
              <img src="https://raviranjan81.netlify.app/static/media/ravi1.7e3793dbd922e6c0b6cf.jpg"  alt="" />
            </div>
          </div>
        </div>
    </div>
  );
}

export default Header;
