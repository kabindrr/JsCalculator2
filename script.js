const allButtonsElement = document.querySelectorAll(".btn");

let strToDisplay = "";
const displayElm = document.querySelector(".display");
const displayElm1 = document.querySelector(".display1");
const operators = ["%", "+", "-", "*", "/"];

allButtonsElement.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;
    buttonAction(value);
  });
});

const buttonAction = (value) => {
  if (value === "AC") {
    strToDisplay = "";
    displayElm1.innerText = "";
    return display(strToDisplay);
  }
  if (value === "C") {
    strToDisplay = strToDisplay.slice(0, -1);
    displayElm1.innerText = displayElm1.innerText.slice(0, -1);
    return display(strToDisplay);
  }

  if (value === "=") {
    const lastCharacter = strToDisplay[strToDisplay.length - 1];
    if (operators.includes(lastCharacter)) {
      strToDisplay = strToDisplay.slice(0, -1);
    }
    return totalCalculation();
  }

  //show only  last clicked operator
  if (operators.includes(value)) {
    const lastCharacter = strToDisplay[strToDisplay.length - 1];
    {
      if (operators.includes(lastCharacter)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
    }
  }

  strToDisplay += value;
  display(strToDisplay);
  displayElm1.innerText = strToDisplay;
};

const display = (str) => {
  displayElm.innerText = str || "0.0";
};

//calculate total calculations
const totalCalculation = () => {
  try {
    const total = eval(strToDisplay);
    display(total);
    strToDisplay = total.toString();
  } catch (error) {
    display("Error");
    displayElm1.innerText = "";
  }
};
