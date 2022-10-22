import { CopyBlock, dracula } from "react-code-blocks";

const CodeBlockCompo = ({code}) => {
  return (
    <CopyBlock
      text={code}
      language={"jsx"}
      showLineNumbers={true}
      theme={dracula}
      wrapLines={true}
      codeBlock
    />
  );
};

export default CodeBlockCompo;
