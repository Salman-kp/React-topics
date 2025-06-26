import React, { useEffect, useState } from "react";

export default function Quotes() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setQuotes(data.slice(0, 10)));
  }, []);
  return (
    <>
      <h1>the page give you a 10 quotes</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>{quote.title}</li>
        ))}
      </ul>
    </>
  );
}
