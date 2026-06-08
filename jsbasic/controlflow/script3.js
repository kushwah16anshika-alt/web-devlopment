let marks = 78;

if (marks >= 90) {
    console.log("A");
}
else if (marks >= 80) {
    console.log("B");
}
else if (marks >= 70) {
    console.log("C");
}
else if (marks >= 60) {
    console.log("D");
}
else {
    console.log("F");
}
// question2
let player1 = "rock";
let player2 = "scissors";

if (player1 === player2) {
    console.log("Draw");
}
else if (
    (player1 === "rock" && player2 === "scissors") ||
    (player1 === "paper" && player2 === "rock") ||
    (player1 === "scissors" && player2 === "paper")
) {
    console.log("Player 1 Wins");
}
else {
    console.log("Player 2 Wins");
}
// question3
let isLoggedIn = true;
let isAdmin = false;

if (!isLoggedIn) {
    console.log("Please Login");
}
else if (isAdmin) {
    console.log("Welcome Admin");
}
else {
    console.log("Welcome User");
}
// question4
let weather = "rainy";

switch (weather) {
    case "sunny":
        console.log("Wear Sunglasses");
        break;

    case "rainy":
        console.log("Carry an Umbrella");
        break;

    case "cold":
        console.log("Wear a Jacket");
        break;

    case "snowy":
        console.log("Wear Heavy Woolens");
        break;

    default:
        console.log("Check Weather Forecast");
}
// question5
let age = 65;

if (age < 13) {
    console.log("Kid");
}
else if (age < 20) {
    console.log("Teen");
}
else if (age < 60) {
    console.log("Adult");
}
else {
    console.log("Senior");
}