// async function getData(value) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (value === 3) {
//         reject("Query Not Found");
//       } else {
//         console.log("Data Sent", value);
//         resolve("Query Solved");
//       }
//     }, 2000);
//   });
// }

// // getData(1)
// //   .then(() => getData(2))
// //   .then(() => getData(3))
// //   .then(() => getData(4))
// //   .then(() => getData(5))
// //   .catch((rej) => console.log(rej));

// await getData(1)
// await getData(2)
// await getData(3)
// await getData(4)
// await getData(5)

// Simple Promise Example
function orderPizza() {
  return new Promise((resolve, reject) => {
    let pizzaReady = true;

    setTimeout(() => {
      if (pizzaReady) {
        resolve("Pizza Delivered");
      } else {
        reject("Pizza Cancelled");
      }
    }, 2000);
  });
}

orderPizza()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });
console.log("Order Placed...");
