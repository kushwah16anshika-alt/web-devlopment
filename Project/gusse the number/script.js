let button = document.getElementById("sumit");

button.addEventListener("click", function () {
  // let bill = document.getElementById("billamount").value;
  // let service = document.getElementById("service").value;
  let num = document.getElementById("numb").value;

  if (num==8) {
    alert("congratulation correct number");
    return;
  }else if(num<10) {
    alert("OOPS! SORRY!!! TRY A LARGER NUMBER.");
    return;
  }else{
    alert("OOPS! SORRY!!!  SMALLER NUMBER.");
    return;
  }
  
  // document.getElementById("result").classList.remove("d-none");
  // document.getElementById("tip").innerText=tipperperson.toFixed(2);
});
