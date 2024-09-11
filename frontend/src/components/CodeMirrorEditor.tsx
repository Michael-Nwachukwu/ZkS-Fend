// src/components/CodeEditor.tsx
import React from "react";
import MonacoEditor from "@monaco-editor/react";

interface CodeEditorProps {
  defaultValue?: string;
  language?: string;
  height?: string;
  onChange?: (value: string | undefined) => void;
  onMount?: (editor: any) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  defaultValue = "// type your code here",
  language = "json",
  height = "400px",
  onChange,
  onMount,
}) => {
  const handleEditorChange = (value: string | undefined) => {
    if (onChange) {
      onChange(value);
    }
  };

  const handleEditorMount = (editor: any) => {
    if (onMount) {
      onMount(editor);
    }
  };

  return (
    <MonacoEditor
      height={height}
      defaultLanguage={language}
      defaultValue={defaultValue}
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
  );
};

export default CodeEditor;
