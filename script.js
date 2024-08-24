const allButtonsElement = document.querySelectorAll(".btn");

let strToDisplay = "";
const displayElm = document.querySelector(".display");
const displayElm1 = document.querySelector(".display1");

const buttonAction = (value) => {
  if (value === "AC") {
    strToDisplay = "";
    displayElm1.innerText = "";
    return display(strToDisplay);
  }
  if (value === "=") {
    return totalCalculation();
  }
  strToDisplay += value;
  display(strToDisplay);
  displayElm1.innerText = strToDisplay;
};

allButtonsElement.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;
    buttonAction(value);
  });
});
const display = (str) => {
  displayElm.innerText = str || "0.0";
};

//calculate total calculations
const totalCalculation = () => {
  try {
    const total = eval(strToDisplay);
    display(total);
  } catch (error) {
    display("Error");
  }
};
