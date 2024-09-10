import CodeEditor from "./CodeMirrorEditor";

const DeployContent = () => {
  return (
    <div>
      <CodeEditor
        defaultValue="//paste code here..."
        language="json"
        height="65vh"
      />
    </div>
  );
};

export default DeployContent;
