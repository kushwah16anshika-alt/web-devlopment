const countryselect = document.getElementById("country");
const flag = document.getElementById("flag");

let countries = [];

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    countries = data;

    data.forEach((country) => {
      const option = document.createElement("option");
      // cca2 = Country Code Alpha-2 (2-letter code)
      option.value = country.cca2;
      option.textContent = country.name.common;
      countryselect.appendChild(option);
    });
    flag.src = "https://flagsapi.com/IN/flat/64.png";
  });
countryselect.addEventListener("change", function () {
  const code = countryselect.value;

  flag.src = "https://flagsapi.com/${code}/flat/64.png";
});
