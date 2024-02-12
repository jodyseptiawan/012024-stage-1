async function handleDelete(id) {
  const url =
    "https://database-query.v3.microgen.id/api/v1/83f27ce1-f95e-49c5-8b75-5fc326cb8850/Todos";

  const config = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const apiUrl = `${url}/${id}`;

  await fetch(apiUrl, config);

  getTodos();
}
