// ques1
let user = [];
user.push(
  { id: 1, Name: "amit", city: "bhopal" },
  { id: 2, Name: "rahul", city: "indore" },
);
//2
console.log(user);
//3
console.log(user[0]);

//4
let users=user.find(u=>u.id===2);
console.log(users);
//5
users.Name="rohit";
console.log(users);
//6
let users=user.find(u=>u.Name==="amit");
users.Name="priya";
console.log(users);
//7
let removeusers=user.filter(u=>u.id!==2);
console.log(removeusers);
//8
let removeusers=user.find(u=>u.id!==2);
console.log(removeusers);