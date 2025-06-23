import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hookcounder from "./components/Hookcounder";
import Hookcountertwo from "./components/hookcountertwo";
import PrevState from "./components/prevState";
import Formvalidation from "./components/Formvalidation";
import Parent from "./components/parent";

function App() {
  return (
    <>
      <Parent number={0} />

      {/*


       <Formvalidation/>
       <PrevState/>
       <Hookcountertwo/>
       <Hookcounder /> */}
    </>
  );
}

export default App;
