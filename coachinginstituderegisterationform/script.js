   document
  .getElementById("registrationForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();

    const email = document.getElementById("email").value.trim();

    const number = document.getElementById("number").value.trim();

    const dob = document.getElementById("dateofbirth").value;

    const gender = document.querySelector(
      "input[name='gender']:checked",
    )?.value;

    const qualification = document.getElementById("qualification").value;

    const grade = document.getElementById("grade").value;

    const course = document.getElementById("course").value;

    const timings = [];

    const allTimings = document.querySelectorAll(
      "input[type='checkbox']:checked",
    );

    allTimings.forEach((item) => {
      timings.push(item.value);
    });

    const address = document.getElementById("address").value.trim();

    const city = document.getElementById("city").value.trim();

    const pincode = document.getElementById("pincode").value.trim();

    const registrationdata = {
      "Full Name": fullname,
      Email: email,
      "Phone Number": number,
      "Date of Birth": dob,
      Gender: gender,
      Qualification: qualification,
      Grade: grade,
      Course: course,
      Timings: timings,
      Address: address,
      City: city,
      Pincode: pincode,
    };

    console.log(registrationdata);

    validateData(registrationdata)
      ? (console.log("Registration Data:", registrationdata),
        alert("Registration successful!"))
      : alert("Registration unsuccessful! Enter valid data.");
  });

document
  .getElementById("registrationForm")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });

function validateData(data) {
  document.querySelectorAll(".manualError").forEach((item) => {
    item.innerText = "";
  });

  let isValid = true;

  if (!data["Full Name"]) {
    document.getElementById("fullnameError").innerText = "Full Name Required";
    isValid = false;
  } else if (!/^[A-Za-z\s]+$/.test(data["Full Name"])) {
    document.getElementById("fullnameError").innerText =
      "Only alphabets and spaces are allowed";
    isValid = false;
  }

  if (
    !/^[A-Za-z\d._]+@(gmail\.com|outlook\.com|ricr\.in)$/.test(data["Email"])
  ) {
    document.getElementById("emailError").innerText = "Enter valid email";
    isValid = false;
  }

  if (!/^[6-9]\d{9}$/.test(data["Phone Number"])) {
    document.getElementById("numberError").innerText =
      "Only Indian mobile numbers allowed";
    isValid = false;
  }

  if (!data["Gender"]) {
    document.getElementById("genderError").innerText = "Please select gender";
    isValid = false;
  }

  if (!/^\d{6}$/.test(data["Pincode"])) {
    document.getElementById("pincodeError").innerText =
      "Enter valid 6 digit pincode";
    isValid = false;
  }

  return isValid;
}
