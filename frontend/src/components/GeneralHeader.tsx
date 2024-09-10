import React from "react";
import MemoLogo from "@/icons/Logo";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
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

export default GeneralHeader;
