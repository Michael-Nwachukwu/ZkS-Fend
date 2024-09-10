// src/components/MainDash.tsx
import React from "react";
import DeployContent from "./DeployContent";
import FaucetContent from "./FaucetContent";
import TransactionsContent from "./TransactionsContent";

interface MainDashProps {
  selectedTab: string;
}

const MainDash: React.FC<MainDashProps> = ({ selectedTab }) => {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      {selectedTab === "deploy" && <DeployContent />}
      {selectedTab === "faucet" && <FaucetContent />}
      {selectedTab === "transactions" && <TransactionsContent />}
    </div>
  );
};

export default MainDash;
