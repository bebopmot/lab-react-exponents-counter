import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";


function App () {

  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
    console.log("hello world")
  };
  
  const increment = () => setCount((prevCount) => prevCount + 1);
  
  return (
    <div className="App">
      <h2><em>Counter</em></h2>
  
      <Counter counting = {count} 
      callBackToDecrement ={decrement}
      callBackToIncrement ={increment}
      />

      <br />
      <h2><em>Exponents</em></h2>

      <div className="container">
        <ExponentTwo counting = {count}/>
        <ExponentThree counting = {count}/>
        <ExponentFour counting = {count}/>
        <ExponentFive counting = {count}/>
        <ExponentSix counting = {count}/>
      </div>
    </div>
  );
}

export default App;
