import Image from "next/image";
import React from "react";
// import { FaSearch } from "react-icons/fa";
// import { IoNotifications } from "react-icons/io5";
import Profile from "./Profile";

export default function NavBar() {
    return (
        <>
            <nav className="sticky top-0 px-3.5 bg-gray-800 py-2 w-full z-20">
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-white space-x-2">
                        <Image src="/assets/logo.svg" alt="logo" width={40} height={40} className="w-10" />
                        <Image src="/assets/logo-text.svg" width={80} height={40} alt="logo_text" className="w-20" />
                        {/* <p>code changed</p> */}
                    </div>
                    {/* <div className="flex items-center space-x-2">
                        <div className="p-1 hidden md:inline relative">
                            <input
                                type="text"
                                placeholder="Search"
                                className="placeholder-gray-600 w-96 h-full py-3 px-2 rounded-md focus:outline-none"
                            />
                            <FaSearch className="absolute bottom-1.5 h-7 w-7 hover:bg-gray-300 right-3 border-transparent hover:text-white p-1 border m-1.5 rounded-full" />
                        </div>
                        <FaSearch className="hover:bg-red-100 rounded border m-2 text-black" />
                    </div> */}
                    <div className="flex space-x-2 items-center">
                        {/* <IoNotifications className="h-6 w-6 hidden md:inline-block" /> */}
                        <Profile />
                    </div>
                </div>
            </nav>
        </>
    );
}
