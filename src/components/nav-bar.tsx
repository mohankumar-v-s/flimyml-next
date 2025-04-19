import Image from "next/image";
import React from "react";
import Profile from "./Profile";

export default function NavBar() {
    return (
        <>
            <nav className="sticky top-0 px-3.5 bg-gray-800 py-2 w-full z-20">
                <div className="flex items-center justify-between">
                    <div className="flex items-center text-white space-x-2">
                        <Image priority src="/assets/logo.svg" alt="logo" width={40} height={40} className="w-10" />
                        <div className="relative w-20 h-10">
                            <Image
                                src="/assets/logo-text.svg"
                                alt="logo_text"
                                fill
                                sizes="(max-width: 640px) 80px, 100vw"
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-2 items-center">
                        <Profile />
                    </div>
                </div>
            </nav>
        </>
    );
}
