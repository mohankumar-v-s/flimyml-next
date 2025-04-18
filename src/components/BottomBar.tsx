"use client";

import { usePathname } from "next/navigation";

import React from "react";
import Link from "next/link";
import { House, Clapperboard,Monitor } from "lucide-react";

export default function BottomBar() {
  const pathname = usePathname();
  const sidebardata = [
    {
      id: 1,
      icon: <House className="group-hover:text-blue-500 h-6 w-6" />,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      icon: <Clapperboard className="group-hover:text-blue-500 h-6 w-6" />,
      title: "Movies",
      path: "/movies",
    },
    {
      id: 3,
      icon: <Monitor className="group-hover:text-blue-500 h-6 w-6" />,
      title: "WebSeries",
      path: "/webseries",
    },
  ];
  return (
    <div className="fixed bottom-0 w-full h-[54px] text-white text-[10px] bg-gray-900">
      <div className="grid grid-cols-3 border-t gap-2 border-gray-800 py-1 px-2">
        {sidebardata.map(({ id, icon, title, path }) => {
          const isActive = pathname === path;
          return (
            <Link
              key={id}
              href={path}
              className={`${
                isActive
                  ? "bg-gray-800 text-blue-500"
                  : "hover:bg-gray-800"
              } group flex flex-col justify-center rounded items-center p-1 mb-2`}
            >
              {icon}
              <span className="group-hover:text-blue-500">{title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
