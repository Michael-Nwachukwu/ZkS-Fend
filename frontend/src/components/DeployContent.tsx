// src/components/DeployContent.tsx
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import MemoPasteIcon from "@/icons/PasteIcon";
import CodeEditor from "./CodeMirrorEditor";

const DeployContent = () => {
  const [code, setCode] = useState("// paste code here...");
  const editorRef = useRef<any>(null);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  const handleEditorMount = (editor: any) => {
    editorRef.current = editor;
  };

  const pasteFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (editorRef.current) {
        editorRef.current.setValue(text);
        setCode(text);
      }
    } catch (err) {
      console.error("Failed to read clipboard content:", err);
    }
  };

  return (
    <div className="relative">
      <CodeEditor
        defaultValue={code}
        language="json"
        height="65vh"
        onChange={handleEditorChange}
        onMount={handleEditorMount}
      />
      <Button
        onClick={pasteFromClipboard}
        className="bg-[#25252D] hover:bg-[#25252D] absolute flex items-center space-x-2 top-6 right-7 rounded-[4px]">
        <MemoPasteIcon /> <p>Paste</p>
      </Button>
    </div>
  );
};

export default DeployContent;
