import React, { useState } from "react";

function Question() {
  const [yesSize, setYesSize] = useState(1);
  const [clickCount, setClickCount] = useState(0);
  const [noMessage, setNoMessage] = useState("No"); //changing no button text


  //list of different "no" messages 
  const noMessages = ["Are you sure?", "Think again!", "Really", "Final Chance!"];




  const handleNoClick = () => {
    setClickCount((prevCount) => {
        const newCount = prevCount + 1;

        if (newCount >= 4) {
          setYesSize(1); //reset size after 4 clicks
          setNoMessage("No") //reset "no" button text
          return 0; //reset click count
        }


        setYesSize((prevSize) => prevSize + 0.2); //increase size
        setNoMessage(noMessages[newCount % noMessages.length]); //update message correctly
        return newCount;
    });
  };
  
 

  return (
    <div>
      <h2>Will you be my Valentine? 💖</h2>
      <button
        style={{ transform: `scale(${yesSize})`, transition: "0.3s ease" }}
        onClick={() => alert("Yay! 💕")}
      >
        Yes 💕
      </button>
      <button onClick={handleNoClick}>{noMessage} </button>
    </div>
  );
}

// ✅ Ensure the export is at the top level (not inside a function)
export default Question;