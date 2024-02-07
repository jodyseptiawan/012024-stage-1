const prgf1 = document.getElementById("paragraf-1");
// const image1 = document.getElementById("image-1");

prgf1.innerText = "Selamat Malam";
prgf1.classList = "text-red font-bold";

// image1.src =
//   "https://images.unsplash.com/photo-1682687220989-cbbd30be37e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const users = [
  {
    name: "User 1",
    email: "user1@mail.com",
  },
  {
    name: "User 2",
    email: "user3@mail.com",
  },
  {
    name: "User 3",
    email: "user3@mail.com",
  },
];

const tableBody = document.getElementById("table-body");

for (let i = 0; i <= 10; i++) {
  const user = users[i];

  tableBody.innerHTML += `
    <tr>
        <td>${i + 1}</td>
        <td>${user.name}</td>
        <td>${user.email}</td> 
    </tr>`;
}
