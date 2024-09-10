import { Button } from "./ui/button";

interface SidebarProps {
  selectedTab: string;
}

const DashFooter = ({ selectedTab }: SidebarProps) => {
  if (selectedTab === "faucet") {
    return <div className="w-64 bg-[#101014]"> {/* Sidebar is blank */} </div>;
  }
  return (
    <footer className="border-t border-border p-4 flex justify-end items-center">
      <Button className="bg-[#3742DD] hover:bg-[#3742DD]">Deploy</Button>
    </footer>
  );
};

export default DashFooter;
