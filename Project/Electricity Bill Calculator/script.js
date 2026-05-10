let button = document.getElementById("calculateBtn");

button.addEventListener("click", function () {
  let units = Number(document.getElementById("units").value);

  if (units === 0) {
    alert("Please enter units");
    return;
  }

  let totalBill = 0;

  if (units <= 50) {
    totalBill = units * 0.5;
  } else if (units <= 200) {
    totalBill = 50 * 0.5 + (units - 50) * 0.75;
  } else if (units <= 450) {
    totalBill = 50 * 0.5 + 150 * 0.75 + (units - 200) * 1.2;
  } else {
    totalBill = 50 * 0.5 + 150 * 0.75 + 250 * 1.2 + (units - 450) * 1.5;
  }

  document.getElementById("result").classList.remove("d-none");

  document.getElementById("bill").innerText = " ₹ " + totalBill.toFixed(2);
});
