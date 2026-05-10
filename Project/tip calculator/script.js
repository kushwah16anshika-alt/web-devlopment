let button = document.getElementById("calculateBtn");

button.addEventListener("click", function () {
  let bill = document.getElementById("billamount").value;
  let service = document.getElementById("service").value;
  let people = document.getElementById("totalpeople").value;

  if (bill === "" || service === "" || people === "") {
    alert("please fill all information");
    return;
  }
  let totalTip = bill * service;
  let tipperperson = totalTip / people;
  document.getElementById("result").classList.remove("d-none");
  document.getElementById("tip").innerText=tipperperson.toFixed(2);
});
