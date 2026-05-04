// Declare a global variable and print it.
// 2.Declare a global variable and access it inside a
// function.
var message = "hello,world!";

function printmessage() {
  console.log(message);
}

printmessage();

// Create a function and declare a local variable
// using var, then print it inside the function.
function printmessage3() {
  var play = "football";
  console.log(play);
}
printmessage3();

// 4.Try to access a local variable outside the
// function and observe the error.

// console.log(play);

// 5.Create a function and declare a variable inside
// an if block using let, then print it inside the
// block.

function printmessage4() {
  let play1 = "ludo";
  console.log(play1);
}
printmessage4();

// 6.Try to access the let variable outside the block
// and observe the error.
// console.log(play1);

// 7.Declare a variable using const inside a block
// and print it inside the block.
function printmessage7() {
  const play7 = "tennis";
  console.log(play7);
}
printmessage7();

// 8.Try to access the const variable outside the
// block and observe the error.
// console.log(play7);

// 9.Create a program with:
// • one global variable
// • one local variable
// • one block variable
// and print them where accessible.
var msg = "hello";
function printmessage9() {
  const play9 = "badmintion";
  console.log(play9);
  console.log(msg);
  {
    var msg1="its me";
    console.log(play9);
    console.log(msg);
    console.log(msg1);
  }
}
printmessage9();


// 10. Write a program to demonstrate:
// • var works inside entire function
// • let and const work only inside block { }
var msg2 = "helloo";
function printmessage9() {
  const play10 = "snakeladder";
  console.log(play10);
  console.log(msg2);
  {
    let msg3="its mee";
    const msg4="anshika";
    console.log(play10);
    console.log(msg2);
    console.log(msg3);
    console.log(msg4);
  }
}
printmessage9();