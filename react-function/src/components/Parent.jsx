import React, { useState } from "react";
import Child from "./child";

export default function Parent({ number }) {
  const [count, setCount] = useState(number);
  const handleCount = () => {
    setCount((preCount) => preCount + 1);
  };
  return <Child pr={count} st={handleCount} />;
}
