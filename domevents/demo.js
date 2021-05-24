var button = document.getElementById("button");
var input = document.getElementById("user input");
var ul = document.querySelector("ul");

function inputlength(){
    return input.value.length;
}

function createListElement(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
}

function addListElementClick(){
    if(inputlength() > 0){
        createListElement();
    }
}

function addListElementKeypress(event){
    if(inputlength() > 0 && event.keyCode === 13){
        createListElement();
    }
}

button.addEventListener("click", addListElementClick);
input.addEventListener("keypress", addListElementKeypress);