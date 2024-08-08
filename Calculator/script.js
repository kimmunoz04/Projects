let calculation = "";

// Function to update calculation and log it
function updateCalculation(value) {
    calculation += value;
    document.getElementById("calculation-display").innerText = calculation;
    console.log(calculation);
  }
  // Calculate the result
function calculateResult() {
    try {
      let result = eval(calculation);
     result = Math.round(result * 100) / 100; // Round to two decimal places
      document.getElementById("result-display").textContent = result;
      calculation = result.toString();
      console.log(result);
    } catch (error) {
      document.getElementById("result-display").innerText = "Error";
      calculation = "";
      console.log(calculation);
    }
  }

  // Clear the display
function clearDisplay() {
    calculation = "";
    document.getElementById("calculation-display").innerText = "";
    document.getElementById("result-display").textContent = "0";
    console.log(calculation);
  }
  // Function to delete last character
function deleteLastCharacter() {
  calculation = calculation.slice(0, -1);
   document.getElementById("calculation-display").innerText = calculation || "0";
   console.log(calculation);
  }
  // add event listeners for buttons
  document.querySelectorAll('.num-but').forEach(button => {
    button.addEventListener('click', (event) => {
      const value = event.target.textContent;
      if (value === "=") {
        calculateResult();
      }else{
        updateCalculation(value);
      }
      
    });
  });

  document.querySelectorAll('.Orange-button').forEach(button => {
    button.addEventListener('click', (event) => {
      updateCalculation(event.target.textContent);
    });
  });
  document.querySelector('.clear-button').addEventListener('click', clearDisplay);
  document.querySelector('.Del-button').addEventListener('click', deleteLastCharacter);
  
