// .................................getEmentbyId..............querySelectorAll.......
// console.log(document.getElementById("main-heading"));
// const heading = document.querySelector(".main-heading");
// const header = document.querySelector(".header");
// const navItem = document.querySelectorAll(".nav-item");
// console.log(navItem);

// const mainHeading = document.getElementById("main-heading");
// const logo = document.getElementById("logo");
// console.log(mainHeading.textContent);
// // mainHeading.textContent = "this has been changed";
// mainHeading.style.color = "white";
// logo.style.color = "white";
// console.log(mainHeading.textContent);

// //................................... Get and Set attributes.......................
// const link = document.querySelector("a");
// console.log(link);
// console.log(link.getAttribute("href"));

// const addTodo = document.querySelector(".form-todo input");
// console.log(addTodo.getAttribute("placeholder"));

// const navItems = document.querySelectorAll(".nav-item");
// console.log(navItems[2].textContent);

// //............................... simple for-loop................................
// let navItems = document.getElementsByTagName("a"); // return elemetns in form of collections
// console.log(navItems);
// for (let i = 0; i <h1 navItems.length; i++) {
//   const navItem = navItems[i];
//   navItem.style.color = "green";
//   navItem.style.backgroundColor = "white";
// }

// // ......................converting html collections to Array.....................

// navItems = Array.from(navItems);
// // forEach method applying on navItems (Array)

// navItems.forEach((navItem) => {
//   navItem.style.color = "green";
//   navItem.style.backgroundColor = "white";
// });

// console.log(Array.isArray(navItems));

// //............................ for-of loop...............................
// const navItems = document.getElementsByTagName("a");
// for (let navItem of navItems) {
//   navItem.style.color = "green";
//   navItem.style.backgroundColor = "white";
// }

//   ........................innerHTML......................................
// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);
// headline.innerHTML = "<h1>this has been changed</h1>";
// console.log(headline.innerHTML);
// headline.innerHTML += '<button class="btn">Learn more</button>';
// console.log(headline.innerHTML);
// \"-------------> " in string

// ...............................classlist,add and toggle,remove classes...............
// add a class to some element
// const sectionToDo = document.querySelector(".section-todo");

// sectionToDo.classList.add("bg-dark");
// console.log(sectionToDo.classList);

// const header = document.querySelector(".header");

// header.classList.add("bg-dark");
// console.log(header.classList);
// .......................................add HTML element using javascript.................

// const todoList = document.querySelector(".todo-list");
// todoList.innerHTML = "<li>Todo2</li>";
// todoList.innerHTML += "<li>Todo3</li>";
//......................................document.createElement, append , prepend , remove..............
// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("this is new text");
// newTodoItem.appendChild(newTodoItemText);
// todoList.prepend(newTodoItem);
// console.log(newTodoItem);
// ................................... before , after methods ......................
// const todolistItem = document.querySelector(".todo-list li");
// const newItemInsert = document.createElement("li");
// newItemInsert.textContent = "item to be inserted";
// todoList.after(newItemInsert);
// ...................................get dimesnions of an element....................

// const sectionTodo = document.querySelector("section-todo");
// const info = sectionToDo.getBoundingClientRect();
// const height = info.height;
// console.log(height);
// ......................................EVENTS.................................
// const btn = document.querySelector(".btn-headline");
// function myFunc() {
//   console.log("value of this is :");
//   console.log(this);
// }
// btn.addEventListener("click", myFunc);
// the value of this is btn itself in case of normal function , whereas in case of arrow
// function value of this is one level up of btn i.e window.
// .....................................Multiple EVENTS.............................

// const allButtons = document.querySelectorAll(".button");
// for (let button of allButtons) {
//   button.addEventListener("click", function () {
//     console.log(this.textContent);
//   });
// }
//......................................EVENT Object...................................
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function (abc) {
//   console.log(abc);
// });
// jab bhi mai kisi bhi elemnt pe event listner add krunga ,
// js Engine line by line execute krta hai
// browser=js Engine+extra features
// browser=js Engine +webApi

// jab browser ko pata chala ki user ne event perform kia hai..to vo 2 kaam krta hai:-
// 1).browser js Engine ko call back function dega
// 2).call back function ke saath jo event hua hai uski information bhi dega browser.or
// ye info. hamein ek Object ki form me milega

const allButtons = document.querySelectorAll(".my-button");

for (let button of allButtons) {
  button.addEventListener("click", (event) => {
    console.log(event);
  });
}
