// const countryselect = document.getElementById("country");
// const flag = document.getElementById("flag");

// let countries = [];

// fetch("https://restcountries.com/v3.1/all")
//   .then((res) => res.json())
//   .then((data) => {
//     countries = data;

//     data.forEach((country) => {
//       const option = document.createElement("option");
//       // cca2 = Country Code Alpha-2 (2-letter code)
//       option.value = country.cca2;
//       option.textContent = country.name.common;
//       countryselect.appendChild(option);
//     });
//     flag.src = "https://flagsapi.com/IN/flat/64.png";
//   });
// countryselect.addEventListener("change", function () {
//   const code = countryselect.value;

//     flag.src = `https://flagsapi.com/${code}/flat/64.png`;
// });

const  fromcountry=document.getElementById("fromcountry");
const toCountry = document.getElementById("tocountry");

const fromFlag = document.getElementById("fromflag");
const toFlag = document.getElementById("toflag");

const amount = document.getElementById("amount");

const convertBtn = document.getElementById("converterbtn");

const result = document.getElementById("result");

let countries = [];

fetch("codes.json").then((res)=>res.json()).then((data)=>{
  countries=data;
  data.forEach((country)=>{
     const option1 = document.createElement("option");
      option1.value = country.code;
      option1.textContent = country.name;

      const option2 = document.createElement("option");
      option2.value = country.code;
      option2.textContent = country.name;

      fromCountry.appendChild(option1);
      toCountry.appendChild(option2);
  });
  country.value="INR";
  country.value="USD";
});


fromCountry.addEventListener("change", () => {

  const selectedCountry = countries.find(
    (country) => country.code === fromCountry.value
  );

  fromFlag.src = selectedCountry.flag;
});


toCountry.addEventListener("change", () => {

  const selectedCountry = countries.find(
    (country) => country.code === toCountry.value
  );

  toFlag.src = selectedCountry.flag;
});

convertBtn.addEventListener("click", () => {

  const from = fromCountry.value;

  const to = toCountry.value;

  const inputAmount = amount.value;

  fetch(`https://open.er-api.com/v6/latest/${from}`)
    .then((res) => res.json())
    .then((data) => {

      const rate = data.rates[to];

      const convertedAmount = inputAmount * rate;

      result.innerText =
        "Converted Amount : " +
        convertedAmount.toFixed(2) +
        " " +
        to;
    });

});