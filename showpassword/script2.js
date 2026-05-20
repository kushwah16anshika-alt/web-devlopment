// function getDataFromLocalStorage() {
//   const data = JSON.parse(localStorage.getItem("Passwords")) || [];

//   const ShowData = document.getElementById("passwordData");

//   console.log(data);

//   if (data.length <= 0) {
//     ShowData.innerHTML = `<tr>
//                 <td colspan="3">
//                     No Password saved
//                 </td>
//             </tr>`;
//     return;
//   }

//   data.forEach((element) => {
//     const TR = document.createElement("tr");

//     TR.innerHTML = `
//               <td>${element.WebsiteName}</td>
//               <td>${element.UserName}</td>
//               <td>${element.Password}</td>
//             `;

//     ShowData.appendChild(TR);
//   });
// }

// getDataFromLocalStorage();









function loadPasswords() {
  const savedPasswords =
    JSON.parse(localStorage.getItem("Passwords")) || [];

  const tableBody = document.querySelector("#passwordData");

  tableBody.innerHTML = "";

  if (!savedPasswords.length) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="3">No Password Saved</td>
      </tr>
    `;
    return;
  }

  for (let i = 0; i < savedPasswords.length; i++) {
    const { WebsiteName, UserName, Password } = savedPasswords[i];

    const row = `
      <tr>
        <td>${WebsiteName}</td>
        <td>${UserName}</td>
        <td>${Password}</td>
      </tr>
    `;

    tableBody.innerHTML += row;
  }
}

loadPasswords();