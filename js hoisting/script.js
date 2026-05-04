// 1.Write a program using var where you log the
// variable before declaration and observe the
// output.
// console.log(a);
// var a = 2;

// 2.Write a program using var where you log the
// variable before and after initialization.
var b;
console.log(b);
b = 3;
console.log(b);

// 3.Write a program using let and try to access the
// variable before declaration.
// console.log(c);
// let c=4;

// 4.Write a program using const and try to access
// the variable before declaration.
console.log(d);
const d = 5;

// 5.Create a program using a function declaration
// and call the function before defining it.
main();
function main() {
  console.log("hello");
}

// 6.Create a program using a function expression
// and call it before assignment.
message();
var message = function () {
  console.log("hello");
};

// 7.Write a program to show that function
// expressions behave like variables in hoisting.
var message1;
message1 = function () {
  console.log("helloo");
};
message1();

// 8.Create a block and try to access a let variable
// before declaration to observe TDZ.
{
  console.log(d);
  let d = "anshika";
}
// 9.Write a program to compare var and let
// hoisting behavior.
console.log(e);
var e = 2;

console.log(f);
let f = 6;

// 10.Create a program demonstrating var,
// let/const, and function declaration hoisting
// behavior.
var message10;

message10 = function () {
  console.log(i);
  var i = 2;

  console.log(j);
  let j = 6;

  console.log(k);
  let k = 8;
};
