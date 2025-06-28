"use client";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { items } from "@/constants";
import { ISidebarItem } from "@/interface";
import { usePathname, useRouter } from "next/navigation";
import Sidebarsearch from "../common/sidebarsearch";

const Sidebar = () => {
  const router = useRouter();
  const pathName = usePathname();

  const onClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="fixed top-0 left-0 h-screen w-64 text-black shadow-lg z-10 p-4">
      <div className="flex flex-col space-y-10 w-full">
        <Image
          className="h-20 w-fit mb-0.5"
          src="/logo2.png"
          alt=""
          width={100}
          height={100}
        />

        {/*Search icon and input */}
        <Sidebarsearch />

        <div className="flex flex-col space-y-3 mt-0">
          {items.map((item: ISidebarItem, index) => {
            const isActive = item.path === pathName;
            return (
              <Link key={index} href={item.path}>
                <div
                  className={`flex items-center space-x-2 p-2 text-sm rounded-lg hover:bg-blue-950 hover:text-white cursor-pointer hover:text-sidebar-active white text-sidebar-iconColor ${
                    isActive
                      ? "bg-blue-950 text-white"
                      : "text-sidebar-iconColor hover:bg-blue-950 hover:text-blue-950"
                  }`}
                  onClick={() => onClick(item.path)}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
