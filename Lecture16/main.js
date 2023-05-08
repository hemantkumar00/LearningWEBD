// console.dir(document);

// console.log(document.URL);

// console.log(document.title);

// document.title = "hello";

// console.log(document.body.childNodes);

// console.log(document.body.children);

// console.log(document.all[11].children[0].textContent);

// document.all[11].children[0].textContent = "Kam kar aapna ";

// let mainHeader = document.getElementById("header-title");
// console.log(mainHeader.textContent);

// mainHeader.textContent = "This is new List";

// mainHeader.innerHTML = "<p>This is a nested paragraph</p>";

// console.log((mainHeader.style.color = "red"));

// Object.assign(mainHeader.style, { backgroundColor: "aqua", color: "blue" });

// let liContent = document.getElementsByClassName("list-group-item");

// console.log(liContent);

// for (let element = 0; element < liContent.length; element++) {
//   console.log((liContent[element].style.color = "blue"));
// }

// let inputElement = document.getElementsByTagName("input");
// console.log(inputElement);

// let inputElement = document.querySelector("")

// let ulElement = document.querySelector("#items");

// console.log(
//   ulElement.firstElementChild.nextElementSibling.nextElementSibling.textContent,
// );

// let firstElement = document.querySelector("#main");

// console.log(firstElement.parentElement);

// Create Element

// Create New Element and Insert the Element

let newDivContainer = document.createElement("div");

let addSomeText = document.createTextNode("this is some content inside div");
newDivContainer.appendChild(addSomeText);

console.log(newDivContainer);

let appendParentElement = document.querySelector(".card-body");

console.log(appendParentElement);

let headerElement = document.querySelectorAll(".container");

headerElement[1].insertBefore(newDivContainer, appendParentElement);
