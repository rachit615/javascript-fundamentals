let user = {
  name: "rachit",
  age: 23,
  city: "bengaluru",
};
console.log(user);
let arr = [1, 2, 3];

function fun() {
  console.log("this is funcitions");
}
let user2 = {
  name: "viku",
};
user2.__proto__ = user;
console.log(user2.age);
