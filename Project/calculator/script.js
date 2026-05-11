let display = document.getElementById("num");

let buttons = document.querySelectorAll(".cmbbtn");
let equalBtn = document.querySelector(".equal-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    
    let value = button.innerText;

    if (value === "AC") {
      display.value = "0";
    } else if (value === "C") {
      display.value = display.value.slice(0, -1);

      if (display.value === "") {
        display.value = "0";
      }
    } else {
      if (display.value === "0") {
        display.value = value;
      } else {
        display.value += value;
      }
    }
  });
});


equalBtn.addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
});
