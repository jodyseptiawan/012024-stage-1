function handleSubmit() {
  const name = document.getElementById("input-name");
  const email = document.getElementById("input-email");
  const message = document.getElementById("input-message");

  const data = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  console.log(data);
}
