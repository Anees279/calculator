const input = document.querySelector(".input");
const numberButton = document.querySelectorAll(".btns button");
let calculation = "";

numberButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      calculation = eval(calculation);
      input.value = calculation;
    } else if (e.target.innerHTML == "AC") {
      calculation = "";
      input.value = calculation;
    } 
    else if (e.target.innerHTML == "DEL") {
      calculation =calculation.substring(0 , calculation.length-1)
      input.value = calculation;
      

    } 
    else {
      calculation += e.target.innerHTML;
      input.value = calculation;
    }
  });
});
