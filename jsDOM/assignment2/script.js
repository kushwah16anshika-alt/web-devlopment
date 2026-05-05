function showData() {
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;

  let result = document.getElementById("result1");

  result.innerHTML = "Name: " + name + "<br>City: " + city;
  result.style.display = "block";
}

function showLogin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let result = document.getElementById("result2");

  result.innerHTML = "Email: " + email + "<br>Password: " + password;

  document.body.style.backgroundColor = "lightyellow";
}

function showFullName() {
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;

  let fullName = first + " " + last;

  document.getElementById("result3").innerHTML = "Full Name: " + fullName;
}
