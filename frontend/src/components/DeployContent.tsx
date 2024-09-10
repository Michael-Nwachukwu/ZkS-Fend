import MemoPasteIcon from "@/icons/PasteIcon";
import CodeEditor from "./CodeMirrorEditor";
import { Button } from "./ui/button";

const DeployContent = () => {
  return (
    <div className="relative">
      <CodeEditor
        defaultValue="//paste code here..."
        language="json"
        height="65vh"
      />
      <Button className="absolute flex items-center space-x-2 top-3 right-4">
        <MemoPasteIcon /> <p>Paste</p>
      </Button>
    </div>
  );
};

export default DeployContent;
