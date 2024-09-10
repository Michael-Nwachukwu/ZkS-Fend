import MemoMessageIcon from "@/icons/MessageIcon";
import { Button } from "./ui/button";
import { ClipboardIcon } from "lucide-react";
import MemoEditIcon from "@/icons/EditIcon";

const Header = () => {
  return (
    <header className="border-b border-border p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl flex items-center space-x-2 font-[400]">
          <MemoMessageIcon className="w-5 h-5 text-white" />
          <p> Name of deployment</p>
          <Button className="bg-transparent hover:bg-transparent">
            <MemoEditIcon className="w-7 h-7 text-white" />
          </Button>
        </h1>
        <Button className="bg-transparent" variant="outline" size="icon">
          <ClipboardIcon className="h-4 w-4" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
