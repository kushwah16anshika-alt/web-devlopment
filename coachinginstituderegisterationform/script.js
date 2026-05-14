document
  .getElementById("registrationForm")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const fullname = document.getElementById("fullname").value;

    const email = document.getElementById("email").value;

    const number = document.getElementById("number").value;

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

    const address = document.getElementById("address").value;

    const city = document.getElementById("city").value;

    const pincode = document.getElementById("pincode").value;

    const registrationdata=
    {
      "Full Name:": fullname,
      "Email:": email,
      "Phone Number:": number,
      "Date of Birth:": dob,
      "Gender:": gender,
      "Qualification:": qualification,
      "Grade:": grade,
      "Course:": course,
      "Timings:": timings,
      "Address:": address,
      "City:":city,
      "Pincode:": pincode
    }

    console.log("Full Name:", fullname);

    console.log("Email:", email);

    console.log("Phone Number:", number);

    console.log("Date of Birth:", dob);

    console.log("Gender:", gender);

    console.log("Qualification:", qualification);

    console.log("Grade:", grade);

    console.log("Course:", course);

    console.log("Timings:", timings);

    console.log("Address:", address);

    console.log("City:", city);

    console.log("Pincode:", pincode);
  });

document
  .getElementById("registrationForm")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });
function vaildatedata(data)
{
  let isvalid=true;
}