// let btn = document.querySelector(".btn-block");

// btn.addEventListener("mouseenter", (e) => {
//   console.log(e);
//   console.log(e.clientX);
//   console.log(e.offsetX);
//   console.log(e.shiftKey);
//   console.log("enter");
// });

// Mouse Events

// let mouseEvents = document.querySelector("#mouseevents");

// mouseEvents.addEventListener("mouseenter", addevent);

// mouseEvents.addEventListener("mouseleave", addevent);
// mouseEvents.addEventListener("mouseover", addevent);
// mouseEvents.addEventListener("mouseout", addevent);

function addevent(e) {
  console.log(e.type);
  console.log(e.target.value);
  //   console.log(e.offsetX + "   " + e.offsetY);
  //   document.body.style.backgroundColor =
  //     "rgb(" + e.offsetX + " ," + e.offsetY + ",100)";

  let div = document.getElementsByClassName("container")[2];
  console.log(div);
  div.innerHTML = `<h1> ${e.target.value}</h1>`;
}

// KeyBoard Events

// let inputElement = document.querySelectorAll(`input[type="text"]`)[1];

// inputElement.addEventListener("keypress", addevent);
// inputElement.addEventListener("cut", addevent);

let selectElement = document.querySelector("select");

selectElement.addEventListener("change", addevent);
