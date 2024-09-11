import React from "react";
import DeployContent from "./DeployContent";
import FaucetContent from "./FaucetContent";
import TransactionsContent from "./TransactionsContent";

interface MainDashProps {
  selectedTab: "deploy" | "faucet";
}

const MainDash: React.FC<MainDashProps> = ({ selectedTab }) => {
  switch (selectedTab) {
    case "deploy":
      return (
        <div className="flex-1 p-6">
          <DeployContent />
        </div>
      );
    case "faucet":
      return (
        <div className="flex-1 p-6">
          <FaucetContent />
        </div>
      );
    default:
      return (
        <div className="flex-1 p-6">
          <p>Content not available</p>
        </div>
      );
  }
};

export default MainDash;
