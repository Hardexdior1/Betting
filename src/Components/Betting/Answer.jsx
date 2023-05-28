import React, { useState } from "react";
import "./Bet.css";
import FAQ from "./FAQ";

const Answer = ({ question,answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="wrap2">

     
          <div className="questionCarrier">


            <header className="header">
              <h4>{question}</h4>
              <button className="showBtn" onClick={()=>{
                setShowAnswer(!showAnswer)
              }}>{showAnswer?'-':'+'}</button>
            </header>
             {/* {showAnswer ?null:<p>{answer}</p>} */}
             {showAnswer?<p>{answer}</p>:''}

          </div>
        
      

    </div>
  );
};

export default Answer;
