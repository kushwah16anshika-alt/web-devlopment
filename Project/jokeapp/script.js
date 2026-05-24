// async function Getnewjoke() {
//   const API_URL = "https://v2.jokeapi.dev/joke/Any";

//   const response = await fetch(API_URL);

//   // console.log(response);
//   const data = await response.json();

//   // console.log(data);

//   // if(data.type==="single")
//   // {
//   //     document.getElementById("setup").innerText=data.joke;
//   //     document.getElementById("delivery").innerText="";
//   // }

//   document.getElementById("setup").innerText = data.joke || data.setup;
//   document.getElementById("delivery").innerText = data.delivery || "";
// }
async function GetNewJoke() {
  const API_URL = "https://v2.jokeapi.dev/joke/Any";

  const response = await fetch(API_URL);

  const data = await response.json();

  document.getElementById("setup").innerText = data.joke || data.setup;

  document.getElementById("delivery").innerText = data.delivery || "";
}
