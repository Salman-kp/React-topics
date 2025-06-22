import React from "react";
import { useState } from "react";
export default function Formvalidation() {
  const [name, setName] = useState("");
  const [comments, setComments] = useState("");
  const [topic, setTopic] = useState("react");

  const handleChangename = (e) => {
    setName(e.target.value);
  };
  const handleChangeComments = (e) => {
    setComments(e.target.value);
  };
  const handleChangeTopic = (e) => {
    setTopic(e.target.value);
  };
  const handleSubmit=(e)=>{
      alert(`${name}    ${comments}    ${topic}`)
      e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username</label>
        <input type="text" value={name} onChange={handleChangename} />
      </div>
      <div>
        <label>Comments</label>
        <textarea value={comments} onChange={handleChangeComments}></textarea>
      </div>
      <div>
        <label>Topic</label>
        <select value={topic} onChange={handleChangeTopic}>
          <option value="react">React</option>
          <option value="flutter">Flutter</option>
          <option value="django">Django</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
