// var a=5;
// console.log(a);
// console.log(b);
// var b=7;
// console.log(a);
// console.log(b);

let test = "this is gobal test variable";

function classA() {
  console.log("classA", test);
}
function classb() {
  let test1 = "this is gobal test variable 1";
  console.log("classb", test);
  console.log("classb", test1);
}
function classc() {
  console.log("classc", test);
}
function classd() {
  console.log("classd", test);
}
function classf() {
  console.log("classf", test);
}
function classe() {
  console.log("classe", test);
}

classA();
classb();
classc();
classd();
classf();
classe();
