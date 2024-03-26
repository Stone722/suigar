"use client";
import React, { useState } from "react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import Actionbar from "@/components/actionbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  return (
    <>
      <div className="flex w-full flex-col bg-black">
        <Header />
        <div className="flex h-full w-full ">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <main className="relative h-screen w-full pb-15 pt-20">
            <div className="mx-auto h-full max-w-screen-2xl overflow-y-auto overflow-x-hidden p-4 md:p-6 2xl:p-10">
              {children}
            </div>
            <Actionbar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
          </main>
        </div>
      </div>
    </>
  );
}
