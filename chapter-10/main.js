//Fetch -API
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((Response) =>Response.json()) 
    .catch((data) => {
        const todoList =document.getElementById("todos");
        const result = data.map((item)=>`<li>${item.title}</li>`).json("");
        todoList.innerHTML = result;
    });