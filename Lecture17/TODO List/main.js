const themeColors = document.querySelectorAll("input[type='radio']");

// console.log(themeColors);

//store themes
function storeTheme(theme) {
  localStorage.setItem("theme", theme);
}

// apply theme

function applyTheme() {
  const activeTheme = localStorage.getItem("theme");
  themeColors.forEach((themeOption) => {
    if (activeTheme === themeOption.id) {
      themeOption.checked = true;
    }
  });
}

themeColors.forEach((themeOption) => {
  themeOption.addEventListener("click", () => {
    storeTheme(themeOption.id);
  });
});

//functionality

let form = document.getElementById("addForm");
let listItem = document.getElementById("items");
let filterItem = document.getElementById("filter");

form.addEventListener("submit", runEvent);

listItem.addEventListener("click", removeEvent);

filterItem.addEventListener("keyup", filterEvent);

//Delete Items Function.
function removeEvent(e) {
  if (e.target.classList.contains("btn-danger")) {
    if (confirm("Sure You want to delete?")) {
      console.log(e.target.parentElement);
      listItem.removeChild(e.target.parentElement);
    }
  }
}

// Add Items in Function.
function runEvent(e) {
  e.preventDefault();
  let inputElement = document.querySelector("#item");
  //   console.log(inputElement.value);

  let newItem = document.createElement("li");
  newItem.className = "list-group-item";

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  deleteBtn.append("X");
  newItem.append(inputElement.value);
  newItem.append(deleteBtn);

  listItem.append(newItem);
}

function filterEvent(e) {
  let text = e.target.value.toLowerCase();
  let items = document.getElementsByTagName("li");
  //   console.log(e.target.value);

  Array.from(items).forEach((item) => {
    let searchText = item.childNodes[0].textContent;
    if (searchText.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else item.style.display = "none";
  });
}

document.onload = applyTheme();

const listItems = document.querySelectorAll("#items>.list-group-item");

console.log(listItem);

let dragSrcElement = null;

function dragStart(e) {
  dragSrcElement = this;
  e.dataTransfer.effectAllowed = "move";
  console.log(this);
  e.dataTransfer.setData("text", this.textContent);
}

function dragEnter() {
  console.log("dragenter");
}

function dragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = "move";
  // console.log("dragover");
}

function dragLeave() {
  console.log("dragleave");
}

function HandleDrop(e) {
  if (dragSrcElement !== this) {
    dragSrcElement.textContent = this.textContent;
    this.textContent = e.dataTransfer.getData("text");
  }
  // console.log("drop");
}

listItems.forEach((item) => {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragenter", dragEnter);
  item.addEventListener("dragover", dragOver);
  item.addEventListener("dragleave", dragLeave);
  item.addEventListener("drop", HandleDrop);
});
