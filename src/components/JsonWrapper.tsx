import { useState } from "react";

interface JsonWrapperProps {
  children: React.ReactNode;
}

const JsonWrapper = ({ children }: JsonWrapperProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <pre>
      <span style={{ cursor: "pointer" }} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "▼ " : "▶ "}
      </span>
      {isOpen ? (
        <>
          {"{"}
          {children}
          {"}"}
        </>
      ) : (
        `{...}`
      )}
    </pre>
  );
};

export default JsonWrapper;
