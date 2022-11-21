interface KeyValueWrapperProps {
  keyProp: string;
  onClickHandler: (
    key: string,
    isOpen: Map<string, boolean>,
    setIsOpen: (isOpen: Map<string, boolean>) => void
  ) => void;
  isOpen: Map<string, boolean>;
  setIsOpen: (isOpen: Map<string, boolean>) => void;
  children: React.ReactNode;
  type: "object" | "array";
}

const KeyValueWrapper = ({
  keyProp,
  isOpen,
  setIsOpen,
  onClickHandler,
  children,
  type,
}: KeyValueWrapperProps) => {
  const bracket = type === "array" ? [ "[", "]" ] : [ "{", "}" ];
  
  return (
    <div key={keyProp} style={{ marginLeft: "20px" }}>
      {`"${keyProp}":`}
      <span
        style={{ cursor: "pointer" }}
        onClick={() => onClickHandler(keyProp, isOpen, setIsOpen)}
      >
        {isOpen.get(keyProp) ? "▼ " : "▶ "}
      </span>
      {bracket[0]}
      {children}
      {bracket[1]}
    </div>
  );
};

export default KeyValueWrapper;