import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Conditionrendering from "./components/Conditionrendering";
import List from "./components/List";
import Eventhandling from "./components/Eventhandling";
import Listmain from "./components/listmain";
import Listofqoute from "./components/listofquote";
import Quotes from "./Quotes";
import UseReducer from "../../react-function/src/components/UseReducer";
function App() {
 
   
  return (
    <>
    <UseReducer/>
    
 {/* <Quotes/>
    <Listofqoute/>
     <Listmain/>
     <Eventhandling/> 
     <List/>
     <Conditionrendering isLogined={true} />
     <Counter/> 
     <Message/>
     <Greet name="Salman">
        <p>Hi thanks to visit my small project , i indroducing small my team</p>
        <p> these paragraphs created by props </p>
     </Greet>
     <Greet name="Mahir"></Greet>
     <Greet name="Prajith"></Greet>
     <Welcome sup="the three kings in Bridgeon Bacth 21 "></Welcome>
     <Welcome sup="@2025 changed me in everythig like self-learning
    ,i can improve my skillset in (html,css,js) and started to learn the react "></Welcome>
     */}
    </>
  );
}

export default App;
