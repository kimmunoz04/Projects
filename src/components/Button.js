function Buttons({ noMessage, onNoClick, onYesClick, yesSize }) {
    return (
      <div>
        <button
          className="button"
          style={{ transform: `scale(${yesSize})`,
                    transition:"transform 0.5s ease-in-out",  }} //smooth animation
          onClick={onYesClick}
        >
          Yes 💕
        </button>
        <button className="button no" onClick={onNoClick}>
          {noMessage}
        </button>
      </div>
    );
  
  }
  
  export default Buttons;  // ✅ Correct default export