import React from "react";
import { useState } from 'react';

export default function List() {
  const product = ["mobaile", "tab", "laptop", "computer", "airdop"];

  return (
    <div>
      <h1>the llist of items in store</h1>
      <ul>
        {product.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
//  export default function List() {
//   const [tasks, setTasks] = useState(['Learn React', 'Practice JavaScript']);

//   return (
//     <div>
//       <h2>List of work</h2>
//       <ul>
//         {tasks.map((task, i) => (
//           <li key={i}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
