import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";

const Sidebar = () => {
  return (
    <aside className="w-64 border-r border-border hidden md:block">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">DEPLOYED PROJECTS</h2>
        <div className="relative mb-4">
          <SearchIcon className="absolute left-2 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          <Input type="search" placeholder="search" className="pl-8" />
        </div>
        <ScrollArea className="h-[calc(100vh-200px)]">
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">23rd Sept, 2024</p>
            <Button variant="ghost" className="w-full justify-start">
              <span className="mr-2">🚀</span> New deployment
            </Button>
            {[1, 2, 3, 4, 5].map((i) => (
              <Button key={i} variant="ghost" className="w-full justify-start">
                <span className="mr-2">📁</span> Title of deployment
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </aside>
  );
};

export default Sidebar;
