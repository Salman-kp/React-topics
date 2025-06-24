import React, { useRef } from 'react';

function InputFocus() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };
  function handleSubmit(e){
    e.preventDefault()
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus</button>
    </form>

    </>
  );
}

export default InputFocus