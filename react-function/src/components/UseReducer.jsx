import React, { useReducer } from "react";
import UsageReducer from "../../../react-project/src/reducers/usageReduser";

const initialvalue = {
  value: 0,
  color: "white",
};

function UseReducer() {
  const [state, dispatch] = useReducer(UsageReducer, initialvalue);

  return (
    <>
      <div style={{ background: state.color }}>
        <h1>Count :{state.value}</h1>
        <button onClick={() => dispatch({type:'change-value' ,payload:1})}>Increment</button>
        <button onClick={() => dispatch({type:'change-value',payload:-1})}>decrement</button>
        <button onClick={() => dispatch({type:'change-color',payload:'green'})}>Green</button>
        <button onClick={() => dispatch({type:'change-color',payload:'red'})}>Red</button>
      </div>
    </>
  );
}

export default UseReducer;
