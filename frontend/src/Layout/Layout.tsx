import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import DashFooter from "@/components/DashFooter";
import GeneralHeader from "@/components/GeneralHeader";

const Layout = () => {
  const [selectedTab, setSelectedTab] = useState<string>("deploy");

  return (
    <>
      <GeneralHeader selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <div className="flex h-screen pt-20 bg-[#101014] text-[#FFFFFF]">
        {/* Sidebar */}
        <Sidebar selectedTab={selectedTab} />

        {/* Main content */}
        <main className="flex-1 flex flex-col">
          {/* Existing Header */}
          <Header selectedTab={selectedTab} />
          {/* Main Dashboard with Tabs */}
          <Outlet />
          {/* Footer */}
          <DashFooter selectedTab={selectedTab} />
        </main>
      </div>
    </>
  );
};

export default Layout;
