// Async JS programjming
// Callbacks,promises , async , await

const datas = [
  // array of objects
  { name: "rachit", age: 23 },
  { name: "prajjwal", age: 20 },
];

function getDatas() {
  setTimeout(() => {
    let output = "";

    datas.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}
function createData(newdata, Callback) {
  setTimeout(() => {
    datas.push(newdata);
    Callback();
  }, 2000);
}

createData({ name: "priyank", age: 23 }, getDatas);
