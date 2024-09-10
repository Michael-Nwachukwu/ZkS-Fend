import { Button } from "./button";

const DashFooter = () => {
  return (
    <footer className="border-t border-border p-4 flex justify-between items-center">
      <Button className="bg-white text-black" variant="outline">
        Paste
      </Button>
      <Button className="bg-[#3742DD] hover:bg-[#3742DD]">Deploy</Button>
    </footer>
  );
};

export default DashFooter;
