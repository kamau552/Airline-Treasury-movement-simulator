import React, { ReactNode } from "react";
import Sidebar from "./sidebar";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex w-full bg-primarybg">
      <Sidebar />
      <div className="flex flex-col w-full ml-64 p-4">{children}</div>
    </div>
  )
}

export default Layout;
