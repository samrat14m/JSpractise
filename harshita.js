const header = document.getElementsByTagName('h1')
console.log(header)


function change() {
    const text = document.getElementById('main')
    text.innerHTML('HURRAY TEXT CHANGED')
}

function handleSubmit() {
    const userInput = document.getElementById("name");
    const todo = document.createElement("h1");
    todo.innerText = userInput.value;
    todo.setAttribute("class", "todoDiv");
    document.getElementById("todoData").appendChild(todo);
}

// adding dynamic html 
// create an empty div tag and give it some id.
// capture the input field value
// create the element that you want to add in html.
// append the element inside the empty div tag.