"use client";

import React from "react";
import Navbar from "@/app/(Component)/Navbar";
import Sidebar from "@/app/(Component)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

const Dashboardlayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  return (
    <div className={`light flex bg-gray-50 text-grey-900 w-full min-h-screen`}>
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <Dashboardlayout>{children}</Dashboardlayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
