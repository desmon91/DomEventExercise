var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");
var scrap = document.getElementsByClassName("deleteBtn");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button")
	li.className = "";
	li.appendChild(document.createTextNode(input.value + " "));
	btn.appendChild(document.createTextNode("delete"));
	li.appendChild(btn);
	btn.className = "deleteBtn";
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function ListName(event) {
	 if (event.target.className === "")
	 {return event.target.className = "done"}
	 
}

function RemoveItem(event){
	var index = event.target
	for (i=0;i<scrap.length;i++)
	if (event.target === scrap[i])
	{scrap[i].parentNode.remove()};
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", ListName);

ul.addEventListener("click", RemoveItem);
