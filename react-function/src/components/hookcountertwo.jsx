import React, { useState } from "react";

function Hookcountertwo() {
  let initialvalue = 0;
  const [count, setCount] = useState(initialvalue);

  return (
    <div>
      Count:{count}
      <button onClick={() => setCount(initialvalue)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
}
export default Hookcountertwo;
