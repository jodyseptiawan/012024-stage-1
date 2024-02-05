function cekGanjilGenap(angka) {
  let hasil;

  if (angka % 2 === 0) {
    hasil = "Genap";
  } else {
    hasil = "Ganjil";
  }

  console.log(hasil);
}

function cetakAngka(angka) {
  console.log("angka: ", angka);
}

// cetakAngka(23123123);
// cekGanjilGenap(23123123);

function perkalian(a, b) {
  const hasil = a * b;

  console.log(hasil);
}

perkalian(2, 40);
perkalian(5, 3);
perkalian(323, 172);
