import { useState } from "react";
import "./App.css";
import { typeCheck } from "./utils";

function App({ data }) {
  return (
    <JsonWrapper>
      <RenderJson argObject={data} />
    </JsonWrapper>
  );
}

export default App;

const RenderJson = ({ argObject }) => {
  const [isOpen, setIsOpen] = useState<Map<string, boolean>>(new Map());

  return (
    <>
      {Object.entries(argObject).map(([key, value]) => {
        switch (typeCheck(value)) {
          case "object":
            return (
              /*  <RenderObject key={key} value={value} isOpen={isOpen} setIsOpen={setIsOpen} /> */
              <div key={key} style={{ marginLeft: "20px" }}>
                {`"${key}":`}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (isOpen.has(key)) {
                      const newMap = new Map(isOpen);
                      newMap.set(key, !newMap.get(key));
                      setIsOpen(newMap);
                    } else {
                      const newMap = new Map(isOpen);
                      newMap.set(key, true);
                      setIsOpen(newMap);
                    }
                  }}
                >
                  {isOpen.get(key) ? "▼ " : "▶ "}
                </span>
                {"{"}
                {isOpen.get(key) ? <RenderJson argObject={value} /> : `...`}
                {"}"}
              </div>
            );
          case "array":
            return (
              <div key={key} style={{ marginLeft: "20px" }}>
                {`"${key}":`}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (isOpen.has(key)) {
                      const newMap = new Map(isOpen);
                      newMap.set(key, !newMap.get(key));
                      setIsOpen(newMap);
                    } else {
                      const newMap = new Map(isOpen);
                      newMap.set(key, true);
                      setIsOpen(newMap);
                    }
                  }}
                >
                  {isOpen.get(key) ? "▼ " : "▶ "}
                </span>
                {"["}
                {isOpen.get(key) ? <RenderJson argObject={value} /> : `...`}
                {"]"}
              </div>
            );
          case "string":
            return (
              <div
                key={key}
                style={{ marginLeft: "20px" }}
              >{`"${key}": "${value}",`}</div>
            );
          default:
            return (
              <div
                key={key}
                style={{ marginLeft: "20px" }}
              >{`"${key}": ${value},`}</div>
            );
        }
      })}
    </>
  );
};

interface RenderObjectProps {
  key: string;
  value: any;
  isOpen: Map<string, boolean>;
  setIsOpen: (arg) => void;
}

// TODO: refactor and add this to RenderJson
const RenderObject = ({ key, value, isOpen, setIsOpen }: RenderObjectProps) => {
  return (
    <div key={key} style={{ marginLeft: "20px" }}>
      {`"${key}":`}
      <span
        style={{ cursor: "pointer" }}
        onClick={() => {
          if (isOpen.has(key)) {
            const newMap = new Map(isOpen);
            newMap.set(key, !newMap.get(key));
            setIsOpen(newMap);
          } else {
            const newMap = new Map(isOpen);
            newMap.set(key, true);
            setIsOpen(newMap);
          }
        }}
      >
        {isOpen.get(key) ? "▼ " : "▶ "}
      </span>
      {"{"}
      {isOpen.get(key) ? <RenderJson argObject={value} /> : `...`}
      {"}"}
    </div>
  );
};

const JsonWrapper = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

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
