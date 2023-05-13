const xhr = new XMLHttpRequest();

xhr.onload = function () {
  let ul = document.getElementsByTagName("ul");
  let jsonData = this.response;

  let catFacts = JSON.parse(jsonData);

  for (let fact of catFacts) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(fact.text));
    ul[0].appendChild(li);
  }
};

xhr.onerror = function () {
  console.log("Error aa gya");
};

xhr.open("get", "https://cat-fact.herokuapp.com/facts");

let btn = document.getElementsByTagName("button");
btn[0].addEventListener("click", (e) => {
  xhr.send();
});
