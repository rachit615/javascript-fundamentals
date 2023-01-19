// .................................getEmentbyId..............querySelectorAll.......
console.log(document.getElementById("main-heading"));
const heading = document.querySelector(".main-heading");
const header = document.querySelector(".header");
const navItem = document.querySelectorAll(".nav-item");
console.log(navItem);

const mainHeading = document.getElementById("main-heading");
const logo = document.getElementById("logo");
console.log(mainHeading.textContent);
// mainHeading.textContent = "this has been changed";
mainHeading.style.color = "white";
logo.style.color = "white";
console.log(mainHeading.textContent);

// //................................... Get and Set attributes.......................
const link = document.querySelector("a");
console.log(link);
console.log(link.getAttribute("href"));

const addTodo = document.querySelector(".form-todo input");
console.log(addTodo.getAttribute("placeholder"));

const navItems = document.querySelectorAll(".nav-item");
console.log(navItems[2].textContent);

// //............................... simple for-loop................................
let navItems = document.getElementsByTagName("a"); // return elemetns in form of collections
console.log(navItems);
for (let i = 0; i <h1 navItems.length; i++) {
  const navItem = navItems[i];
  navItem.style.color = "green";
  navItem.style.backgroundColor = "white";
}

// // ......................converting html collections to Array.....................

navItems = Array.from(navItems);
// forEach method applying on navItems (Array)

navItems.forEach((navItem) => {
  navItem.style.color = "green";
  navItem.style.backgroundColor = "white";
});

console.log(Array.isArray(navItems));

// //............................ for-of loop...............................
const navItems = document.getElementsByTagName("a");
for (let navItem of navItems) {
  navItem.style.color = "green";
  navItem.style.backgroundColor = "white";
}

//   ........................innerHTML......................................
const headline = document.querySelector(".headline");
console.log(headline.innerHTML);
headline.innerHTML = "<h1>this has been changed</h1>";
console.log(headline.innerHTML);
headline.innerHTML += '<button class="btn">Learn more</button>';
console.log(headline.innerHTML);
// \"-------------> " in string
