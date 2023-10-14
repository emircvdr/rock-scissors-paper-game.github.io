const tas = document.getElementById("tas");
const kagıt = document.getElementById("kagıt");
const makas = document.getElementById("makas");
const tas2 = document.getElementById("tas2");
const kagıt2 = document.getElementById("kagıt2");
const makas2 = document.getElementById("makas2");
const ekran = document.getElementById("alo");
const yenile = document.getElementById("refresh");
const text = document.getElementById("text");

function rastgeleSecim() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      choice = tas2;
      break;
    case 1:
      choice = kagıt2;
      break;
    case 2:
      choice = makas2;
      break;
  }
  return choice;
}

tas.addEventListener("click", () => {
  tas.classList.add("selected");
  var secim = tas;
  var computer = rastgeleSecim();
  computer.classList.add("selected");

  setTimeout(() => {
    if (secim == tas && computer == tas2) {
      ekran.classList.remove("alo");
      text.innerText = `Berabere. `;
    } else if (secim == tas && computer == makas2) {
      ekran.classList.remove("alo");
      text.innerText = `Kazandın. `;
    } else if (secim == tas && computer == kagıt2) {
      ekran.classList.remove("alo");
      text.innerText = `Kaybettin. `;
    }
  }, 400);
});
kagıt.addEventListener("click", () => {
  kagıt.classList.add("selected");
  var secim = kagıt;
  var computer = rastgeleSecim();
  computer.classList.add("selected");
  setTimeout(() => {
    if (secim == kagıt && computer == kagıt2) {
      ekran.classList.remove("alo");
      text.innerText = `Berabere. `;
    } else if (secim == kagıt && computer == makas2) {
      ekran.classList.remove("alo");
      text.innerText = `Kaybettin. `;
    } else if (secim == kagıt && computer == tas2) {
      ekran.classList.remove("alo");
      text.innerText = `Kazandın. `;
    }
  }, 300);
});
makas.addEventListener("click", () => {
  makas.classList.add("selected");
  var secim = makas;
  var computer = rastgeleSecim();
  computer.classList.add("selected");
  setTimeout(() => {
    if (secim == makas && computer == tas2) {
      ekran.classList.remove("alo");
      text.innerText = `Kaybettin. `;
    } else if (secim == makas && computer == makas2) {
      ekran.classList.remove("alo");
      text.innerText = `Berabere. `;
    } else if (secim == makas && computer == kagıt2) {
      ekran.classList.remove("alo");
      text.innerText = `Kazandın. `;
    }
  }, 300);
});
yenile.addEventListener("click", () => {
  location.reload();
});
