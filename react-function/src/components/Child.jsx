import React from "react";

export default function Child({ pr, st }) {
  return (
    <>
      <h1>count:{pr}</h1>
      <button onClick={st}>Increse Me</button>
    </>
  );
}
