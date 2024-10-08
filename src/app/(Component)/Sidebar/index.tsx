"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { Menu } from "lucide-react";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  return (
    <div>
      {/*  top logo */}
      <div className="flex gap-3 justify-between md:justify-normal items-center pt-8">
        <div>logo</div>
        <h1 className="font-extrabold text-2xl">MarketWave</h1>

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={() => {}}
        >
          <menu className="w-4 h-4" />
        </button>
      </div>

      {/*  LINKS */}
      <div className="flex-grow mt-8">{/* TODO: Links here*/}</div>

      {/*  FOOTER */}
      <div>
        <p className="text-center text-xs text-gray-500">
          &copy; 2025 MarketWave
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
