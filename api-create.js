async function handleSubmit() {
  const name = document.getElementById("input-name");
  const notes = document.getElementById("input-notes");
  const status = document.getElementById("input-status");

  const data = {
    name: name.value,
    notes: notes.value,
    status: status.value,
  };

  const url =
    "https://database-query.v3.microgen.id/api/v1/83f27ce1-f95e-49c5-8b75-5fc326cb8850/Todos";

  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  await fetch(url, config);

  window.location.href = "/todos.html";
}
