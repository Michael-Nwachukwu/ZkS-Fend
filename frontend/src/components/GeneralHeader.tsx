// src/components/GeneralHeader.tsx
import React from "react";
import MemoLogo from "@/icons/Logo";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface GeneralHeaderProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

const GeneralHeader: React.FC<GeneralHeaderProps> = ({
  selectedTab,
  onTabChange,
}) => {
  const handleConnectWallet = () => {
    alert("Connect Wallet clicked!");
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#20232a] p-4 flex items-center justify-between border-b border-[#333] z-50">
      <h1 className="text-xl font-bold text-white">
        <MemoLogo className="h-12 w-28" />
      </h1>

      <div className="flex-1 flex justify-center">
        <Tabs
          value={selectedTab}
          onValueChange={onTabChange}
          className="w-[400px]">
          <TabsList className="flex space-x-4 bg-transparent">
            <TabsTrigger value="deploy">Deploy</TabsTrigger>
            <TabsTrigger value="faucet">Faucet</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <button
        onClick={handleConnectWallet}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
        Connect Wallet
      </button>
    </header>
  );
};

export default GeneralHeader;
