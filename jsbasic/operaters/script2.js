console.log("10" + 1);  
console.log("10" - 1);  
console.log(true + false);
console.log(!!"Sheryians");
// 2. Convert using unary +
let str = "42";
let num = +str;
console.log(num);
// 3. Use ternary:
let age = 17;
let msg = age >= 18 ? "Adult" : "Minor";
console.log(msg);

// 4. Build a calculator:
// Using switch + arithmetic operators
function calc(a, b, operator) {
// +, -, *, /
 switch (operator) {
        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":
            return b !== 0 ? a / b : "Cannot divide by zero";

        default:
            return "Invalid operator";
    }
}
console.log(calc(10, 5, "+"));
let marks = 82;

if (marks >= 90) {
    console.log("Excellent");
}
else if (marks >= 75) {
    console.log("Good");
}
else if (marks >= 50) {
    console.log("Average");
}
else {
    console.log("Fail");
}