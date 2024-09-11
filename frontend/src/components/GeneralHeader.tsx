import React from "react";
import MemoLogo from "@/icons/Logo";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

interface GeneralHeaderProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const GeneralHeader: React.FC<GeneralHeaderProps> = ({
  selectedTab,
  onTabChange,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-[#20232a] p-4 flex items-center justify-between border-b border-[#333] z-50">
      <h1 className="text-xl font-bold text-white">
        <MemoLogo className="h-[3.5rem] w-32" />
      </h1>

      <div className="flex-1 flex justify-center space-x-4">
        <Link
          to="/deploy"
          className={`text-white px-4 py-2 ${
            selectedTab === "deploy"
              ? "border-b-2 border-blue-500"
              : "bg-transparent"
          }`}
          onClick={() => onTabChange("deploy")}>
          Deploy
        </Link>
        <Link
          to="/faucet"
          className={`text-white px-4 py-2 ${
            selectedTab === "faucet"
              ? "border-b-2 border-blue-500"
              : "bg-transparent"
          }`}
          onClick={() => onTabChange("faucet")}>
          Faucet
        </Link>
      </div>

      <ConnectButton
        showBalance={false}
        chainStatus="none"
        accountStatus={{
          smallScreen: "avatar",
          largeScreen: "address",
        }}
      />
    </header>
  );
};

export default React.memo(GeneralHeader);
