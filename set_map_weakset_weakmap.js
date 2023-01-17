"use strict";
//                               S  E  T
// set
// it contains only unique values
// object constructor
// let myArray = [1, 2, 3, 4];
// let obj = new Set(myArray);
// console.log(obj);
// obj.add(5);
// obj.add(5);

// console.log(obj);
// let newobj = {
//   name: "rachit",
//   age: 23,
// };
// obj.add(newobj);
// console.log(obj);

// //to check if a value is present in the set or not ? --> use .has(value) funciton

// console.log(
//   obj.has({
//     name: "rachit",
//     age: 23,
//   })
// );

// obj.delete(newobj);
// // how to iterate elements in the set ?
// // using forEach() method

// obj.forEach((element) => {
//   console.log(element);
// });
// // of --> use to iterate values in object
// // in --> use to iterate keys in object
// // for (let value of obj) {
// //   console.log(value);
// // }
//                              M  A  P
// // Map -> keys-> values
// // main things in map
// // .get(), .set(), .clear(), ,,, iterate --> for(let [key,value] of myMap ){

// // to create a map

// let myMap = new Map();
// myMap.set(23);
// myMap.set("a2", 20);

// console.log(myMap);

// // to get the value of any key
// myMap.get("a2");
// myMap.set("a3", "prajjwal");
// myMap.set("djfldjf", "jfldjfld");

// // to iterate over the map
// for (let [key, value] of myMap) {
//   console.log(key, value);
// }
// myMap.forEach((key, value) => {
//   console.log(key, value);
// });
// //                                         W E A K   S E T

// you can only store objects in this
// you cant iterate in this

let obj = {
  name: "rachit",
  age: 23,
};

let weak_set = new WeakSet();
weak_set.add(obj);
console.log(weak_set);
// weak_set.add(1);  cant add other than object
//                                        W E A K  M A P

let weak_map = new WeakMap();
