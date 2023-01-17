// objects references and copying
// cloning and merging, Object.assign
let user = {
  name: "rachit",
  age: 23,
};
//create a new object as clone
let clone = {};
for (let key in user) {
  clone[key] = user[key];
}
clone["name"] = "prajjwla";
console.log(clone);
// using Object.assign method
let permissions1 = {
  canview: true,
};

let permissions2 = {
  canedit: true,
};
Object.assign(user, permissions1, permissions2);
console.log(user);
