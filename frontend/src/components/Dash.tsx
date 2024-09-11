import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashFooter from "./DashFooter";
import GeneralHeader from "./GeneralHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [selectedTab, setSelectedTab] = useState<string>("deploy");

  return (
    <div className="min-h-[100vh] flex flex-col bg-[#101014] text-[#FFFFFF]">
      {/* General Header at the top */}
      <GeneralHeader selectedTab={selectedTab} onTabChange={setSelectedTab} />

      {/* Main content with flex to handle layout */}
      <div className="flex-1 flex pt-20">
        <Sidebar selectedTab={selectedTab} />

        {/* Main section with content */}
        <main className="flex-1 flex flex-col justify-between">
          <Header selectedTab={selectedTab} />
          <Outlet /> {/* This will render the route components */}
          <DashFooter selectedTab={selectedTab} />
        </main>
      </div>
    </div>
  );
};

export default Layout;
