async function getTodos() {
  const url =
    "https://database-query.v3.microgen.id/api/v1/83f27ce1-f95e-49c5-8b75-5fc326cb8850/Todos";

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(url, config);
  const todos = await response.json();

  const tableBody = document.getElementById("table-body");

  tableBody.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    console.log(todo);

    tableBody.innerHTML += `
    <tr>
        <td>${i + 1}</td>
        <td>${todo.name}</td>
        <td>${todo.notes}</td>
        <td>${todo.status}</td> 
        <td><button onclick="handleDelete('${todo._id}')">Delete</button></td> 
    </tr>`;
  }
}

getTodos();
