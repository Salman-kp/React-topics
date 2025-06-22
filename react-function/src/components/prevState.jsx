import React, { useState } from "react";

export default function PrevState() {
  const initialvalue = 0;
  const [conut, setCount] = useState(initialvalue);
  return (
    <div>
        Count:{conut}
      <button onClick={()=>setCount(initialvalue)}>Reset</button>
      <button onClick={()=>setCount(prevState=>prevState+1)}>Increment</button>
      <button onClick={()=>setCount(prevState=>prevState-1)}>Decrement</button>
    </div>
  );
}
