import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashFooter from "./ui/DashFooter";
import GeneralHeader from "./GeneralHeader";
import MainDash from "./Main";

export default function Dash() {
  const [selectedTab, setSelectedTab] = useState<string>("deploy");

  return (
    <>
      <GeneralHeader selectedTab={selectedTab} onTabChange={setSelectedTab} />

      <div className="flex h-screen pt-20 bg-[#101014] text-[#FFFFFF]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <main className="flex-1 flex flex-col ">
          {" "}
          {/* Existing Header */}
          <Header />
          {/* Main Dashboard with Tabs */}
          <MainDash selectedTab={selectedTab} />
          {/* Footer */}
          <DashFooter />
        </main>
      </div>
    </>
  );
}
