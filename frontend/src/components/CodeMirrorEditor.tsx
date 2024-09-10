// src/components/CodeEditor.tsx
import React, { useState } from "react";
import MonacoEditor from "@monaco-editor/react";

interface CodeEditorProps {
  defaultValue?: string;
  language?: string;
  height?: string;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  defaultValue = "paste code here...",
  language = "json",
  height = "30vh",
}) => {
  const [code, setCode] = useState(defaultValue);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  const handleEditorMount = (editor: any, monaco: any) => {
    // Editor instance is available here
  };

  return (
    <div>
      <MonacoEditor
        height={height}
        defaultLanguage={language}
        value={code}
        onChange={handleEditorChange}
        onMount={handleEditorMount}
        theme="vs-dark"
        options={{
          selectOnLineNumbers: true,
          minimap: { enabled: false },
          wordWrap: "on",
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
