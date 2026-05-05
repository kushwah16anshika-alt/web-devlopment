let arr = [12, 32, 45, 63, 78, 93, 83];

for (var i = 0; i < 7; i++) {
  console.log(arr[i]);
}

console.log(arr);

arr[2] = arr[2] + 10;

console.log(arr);

arr.push(99);
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift(12);
console.log(arr);
arr.shift();
console.log(arr);
