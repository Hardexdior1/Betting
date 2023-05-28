import { useState } from "react";
import "./App.css";
// import Section1 from "./Components/Section1";
// import Section2 from "./Components/Section2";
// import Section3 from "./Components/Section3";
// import Section4 from "./Components/Section4";
import Bet from "./Components/Betting/Bet";
// import Answer from "./Components/Betting/Answer";

function App() {
  const [searchTerm,setSearchTerm]=useState('')
  return (
    <div className="App">
            <h2>Betting Project</h2>


      <small>Coded by <b>{' <>oluwadamilare </>'}</b> </small>
      {/* <h3>i am searching for {searchTerm}</h3>
      <input type="text"  placeholder="search brands categories product" onChange={(event)=>{
        setSearchTerm(event.target.value)
      }} /> */}

      <Bet />

      {/* <Answer /> */}

      {/* <Section1 />
      <Section2 />
      <Section3 />
      <Section4 /> */}
    </div>
  );
}

export default App;
