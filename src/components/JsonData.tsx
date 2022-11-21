import { useState } from "react";
import { typeCheck } from "../utils";
import KeyValueWrapper from "./KeyValueWrapper";

interface RenderJsonProps {
  data: any;
}

const RenderJson = ({ data }: RenderJsonProps) => {
  const [isOpen, setIsOpen] = useState<Map<string, boolean>>(new Map());

  const onClickHandler = (key, isOpen, setIsOpen) => {
    const keyIsNotInMap = !isOpen.has(key);
    if (keyIsNotInMap) {
      // If the key doesn't exist in the map, add it with the value of true.
      const newMap = new Map(isOpen);
      newMap.set(key, true);
      setIsOpen(newMap);
    } else {
      // If the key exists in the map, toggle the value.
      const newMap = new Map(isOpen);
      newMap.set(key, !newMap.get(key));
      setIsOpen(newMap);
    }
  };

  return (
    <>
      {Object.entries(data).map(([key, value]) => {
        switch (typeCheck(value)) {
          case "object":
            return (
              <KeyValueWrapper
                key={key}
                keyProp={key}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                onClickHandler={onClickHandler}
                type="object"
              >
                {isOpen.get(key) ? <RenderJson data={value} /> : `...`}
              </KeyValueWrapper>
            );
          case "array":
            return (
              <KeyValueWrapper
                key={key}
                keyProp={key}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                onClickHandler={onClickHandler}
                type="array"
              >
                {isOpen.get(key) ? <RenderJson data={value} /> : `...`}
              </KeyValueWrapper>
            );
          case "string":
            return (
              <div key={key} style={{ marginLeft: "20px" }}>
                {`"${key}": "${value}"`}
              </div>
            );
          default:
            return (
              <div key={key} style={{ marginLeft: "20px" }}>
                {`"${key}": ${value}`}
              </div>
            );
        }
      })}
    </>
  );
};

export default RenderJson;