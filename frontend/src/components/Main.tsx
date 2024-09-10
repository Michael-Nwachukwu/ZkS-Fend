// src/components/MainDash.tsx
import React from "react";
import DeployContent from "./DeployContent";
import FaucetContent from "./FaucetContent";

interface MainDashProps {
  selectedTab: string;
}

const MainDash: React.FC<MainDashProps> = ({ selectedTab }) => {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      {selectedTab === "deploy" && <DeployContent />}
      {selectedTab === "faucet" && <FaucetContent />}
    </div>
  );
};

export default MainDash;
