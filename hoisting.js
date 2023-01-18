// H O I S T I N G    in javascript
// hoisting is a phenomenon in javascript in which we can access variables and functions
//even before we have initialized them...without any error

console.log(getName);
console.log(getName2);
console.log(x);
var x = 7;
function getName() {
  console.log("name is rachit");
}
var getName2 = () => {
  console.log("name is rachit1"); //in case of arrow functions they treated as same as variables.so they will also be undefined.
};
