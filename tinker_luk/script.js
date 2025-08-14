// variables

// let a = true; // boolean
// let x = 1000000;
// const y = 20; // a constant value cant be changed

// console.log(document);

// document.getElementById("btn");
// onclick = function () {
//   window.alert("WHY did YOU do THAT !");
// };
// OR the below
let btn1 = document.getElementById("btn");
let h1 = document.getElementById("h1");
let sec = document.getElementById("todo");

// btn1.onclick = function () {
//   window.alert("WHY did YOU do THAT !");
// };

btn1.addEventListener("click", why);
btn1.addEventListener("click", function () {
  h1.style.color = "red";
  sec.style.boxShadow = "0 0 10px red";
});

function why() {
  window.alert("WHY did YOU do THAT !");
}

let c_btn = document.getElementById("count");
let c_val = document.getElementById("c_val");
let count = 0;

c_btn.addEventListener("click", function () {
  count++;
  c_val.textContent = count;
});

let reset = document.getElementById("reset");

reset.addEventListener("click", function () {
  count = 0;
  c_val.textContent = count;
});

let mode = document.getElementById("mode");
let dark = false;

mode.addEventListener("click", function () {
  window.alert("WhY aRe YoU rAcIsT ??");

  if (!dark) {
    document.body.style.backgroundColor = "#1a1a1aff";
    mode.textContent = "LIGHT";
    document.body.style.color = "white";
    dark = true;
  } else {
    document.body.style.backgroundColor = "white";
    mode.textContent = "DARK";
    document.body.style.color = "black";
    dark = false;
  }
});

const submit = document.getElementById("submit");
const input = document.getElementById("list");
const todo = document.getElementById("todol");

submit.addEventListener("click", function () {
  const inputValue = input.value.trim();

  if (inputValue != "") {
    const ul = document.createElement("li");
    ul.style.display = "flex";
    ul.style.justifyContent = "center";
    ul.style.alignItems = "center";

    const li = document.createElement("input");
    li.type = "checkbox";

    li.value = inputValue;
    const span = document.createElement("span");
    span.textContent = inputValue;

    li.addEventListener("click", function () {
      ul.remove();
    });

    ul.appendChild(li);
    ul.appendChild(span);
    todo.appendChild(ul);
    input.value = "";
  } else {
    window.alert("Stop Doing NoThInG !");
  }
});
