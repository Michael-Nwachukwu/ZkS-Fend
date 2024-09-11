import { useState, useRef, useEffect } from "react";
import MemoMessageIcon from "@/icons/MessageIcon";
import { Button } from "./ui/button";
import MemoEditIcon from "@/icons/EditIcon";
import MemoSaveIcon from "@/icons/SaveIcon";
import MemoCancelIcon from "@/icons/CancelIcon";

interface SidebarProps {
  selectedTab: string;
}

const Header = ({ selectedTab }: SidebarProps) => {
  // Sidebar for the 'faucet' tab
  if (selectedTab === "faucet") {
    return <div className="w-64 bg-[#101014]"> {/* Sidebar is blank */} </div>;
  }

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Name of deployment");
  const [tempText, setTempText] = useState(text);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setText(tempText);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setTempText(text);
    setIsEditing(false);
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus(); // Automatically focus on input when editing starts
    }
  }, [isEditing]);

  return (
    <header className="border-b border-border p-4">
      <div className="flex items-center justify-between">
        <h1 className="flex items-center space-x-1 font-[400]">
          <MemoMessageIcon className="w-5 h-5 text-white" />
          {isEditing ? (
            <input
              ref={inputRef}
              type="text"
              value={tempText}
              onChange={(e) => setTempText(e.target.value)}
              className="text-sm bg-transparent border-b border-white outline-none text-white"
            />
          ) : (
            <p className="text-sm">{text}</p>
          )}
          {isEditing ? (
            <>
              <Button
                onClick={handleCancelClick}
                className="bg-transparent hover:bg-transparent"
                aria-label="Cancel Edit">
                <MemoCancelIcon className="w-7 h-7 text-white cursor-pointer" />
              </Button>
              <Button
                onClick={handleSaveClick}
                className="bg-transparent hover:bg-transparent"
                aria-label="Save Changes">
                <MemoSaveIcon className="w-7 h-7 text-white cursor-pointer" />
              </Button>
            </>
          ) : (
            <Button
              onClick={handleEditClick}
              className="bg-transparent hover:bg-transparent"
              aria-label="Edit Name">
              <MemoEditIcon className="w-7 h-7 text-white cursor-pointer" />
            </Button>
          )}
        </h1>
      </div>
    </header>
  );
};

export default Header;
