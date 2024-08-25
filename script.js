const allButtonsElement = document.querySelectorAll(".btn");

let strToDisplay = "";
const displayElm = document.querySelector(".display");
const displayElm1 = document.querySelector(".display1");

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
    return totalCalculation();
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
