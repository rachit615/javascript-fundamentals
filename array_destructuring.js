//[ array destructuring ] is used to unpack values from the array or properties from objects, into distinct variables

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let [x, y, ...rest] = arr;
console.log(rest);
// let [a, , , b, ...rest1] = arr;
console.log(b);
console.log(rest1);

// similarly we can [destructure objects] on the left hand side of the assignment
let obj = {
  a: 1,
  b: 2,
};
let { a, b } = obj;
console.log(a, b);
//                                       [   spread syntax operator ]

// Spread syntax allows an iterable such as an array or string to be expanded in places
// where zero or more argumnts are expected. In an object literal , the spread syntax
// enumerates the properties of an object and adds the key value pairs to the object being created.

// basically changing an array into object with key value pairs
let arr = [1, 2, 4545, 3, 4];
let obj = { ...arr };
console.log(obj);

let obj2 = {
  name: "rachit",
  company: "Hashedin by deloitte",
};

console.log({ ...obj2, company: "refactor academy" });
