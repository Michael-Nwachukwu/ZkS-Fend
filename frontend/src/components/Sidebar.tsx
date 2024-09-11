import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import MemoPlusIcon from "@/icons/PlusIcon";
import { useState } from "react";

interface SidebarProps {
  selectedTab: string;
}

const Sidebar = ({ selectedTab }: SidebarProps) => {
  if (selectedTab === "faucet") {
    return <div className="w-64 bg-[#101014]"> {/* Sidebar is blank */} </div>;
  }

  const [deployments, setDeployments] = useState([
    "Deployment 1",
    "Deployment 2",
    "Deployment 3",
    "Deployment 4",
    "Deployment 5",
  ]);

  return (
    <aside className="w-[17rem] px-1 border-r border-border hidden md:block">
      <div className="py-4 px-[3px]">
        <div className="flex items-center space-x-4 mb-4">
          <h2 className="text-xs font-[400] pl-2 text-[#8E8EA2]">
            DEPLOYED PROJECTS
          </h2>
          <Button
            className="flex p-2 items-center space-x-1 bg-[#3742DD59] hover:bg-[#3742DD]"
            aria-label="Add new project">
            <MemoPlusIcon />
            <p>Add new</p>
          </Button>
        </div>
        <div className="relative mb-4">
          <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="bg-transparent border-[#525264] pl-8"
            aria-label="Search projects"
          />
        </div>
        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">23rd Sept, 2024</p>
            <Button variant="ghost" className="w-full justify-start">
              <span className="mr-2">🚀</span> New deployment
            </Button>
            {deployments.map((deployment, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start hover:bg-[#3742DD]"
                aria-label={`View deployment ${deployment}`}>
                <span className="mr-2">📁</span> {deployment}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
};

export default Sidebar;
