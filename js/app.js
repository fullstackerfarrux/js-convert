let kirgizdi = document.querySelector(".kirgizdi");
let pulingizUsd = document.querySelector(".pulingiz-usd");
let pulingizRub = document.querySelector(".pulingiz-rub");
let pulingizUzs = document.querySelector(".pulingiz-uzs");
let pulingizEuro = document.querySelector(".pulingiz-eur");
let aylandiUsd = document.querySelector(".aylandi-usd");
let aylandiRub = document.querySelector(".aylandi-rub");
let aylandiUzs = document.querySelector(".aylandi-uzs");
let aylandiEuro = document.querySelector(".aylandi-eur");
let convert = document.querySelector(".convert");
let pulingiz = document.querySelector(".pulingiz");
let aylandi = document.querySelector(".aylandi");

pulingiz.addEventListener("click", () => {
  let selectvalue = pulingiz.value;
  if (selectvalue === "usd") {
    aylandiUsd.style.display = "none";
    aylandiRub.style.display = "block";
    aylandiEuro.style.display = "block";
    aylandiUzs.style.display = "block";
  } else if (selectvalue === "rub") {
    aylandiRub.style.display = "none";
    aylandiEuro.style.display = "block";
    aylandiUzs.style.display = "block";
    aylandiUsd.style.display = "block";
  } else if (selectvalue === "uzs") {
    aylandiUzs.style.display = "none";
    aylandiUsd.style.display = "block";
    aylandiRub.style.display = "block";
    aylandiEuro.style.display = "block";
  } else if (selectvalue === "euro") {
    aylandiEuro.style.display = "none";
    aylandiUzs.style.display = "block";
    aylandiUsd.style.display = "block";
    aylandiRub.style.display = "block";
  } else {
    aylandiEuro.style.display = "block";
    aylandiUzs.style.display = "block";
    aylandiUsd.style.display = "block";
    aylandiRub.style.display = "block";
  }
});

// aylandi.addEventListener("click", () => {
//   let selectvalue = aylandi.value;
//   if (selectvalue === "usd") {
//     pulingizUsd.style.display = "none";
//     pulingizRub.style.display = "block";
//     pulingizEuro.style.display = "block";
//     pulingizUzs.style.display = "block";
//   } else if (selectvalue === "rub") {
//     pulingizRub.style.display = "none";
//     pulingizEuro.style.display = "block";
//     pulingizUzs.style.display = "block";
//     pulingizUsd.style.display = "block";
//   } else if (selectvalue === "uzs") {
//     pulingizUzs.style.display = "none";
//     pulingizUsd.style.display = "block";
//     pulingizRub.style.display = "block";
//     pulingizEuro.style.display = "block";
//   } else if (selectvalue === "euro") {
//     pulingizEuro.style.display = "none";
//     pulingizUzs.style.display = "block";
//     pulingizUsd.style.display = "block";
//     pulingizRub.style.display = "block";
//   } else {
//     pulingizEuro.style.display = "block";
//     pulingizUzs.style.display = "block";
//     pulingizUsd.style.display = "block";
//     pulingizRub.style.display = "block";
//   }
// });

convert.addEventListener("click", (e) => {
  e.preventDefault();
  let input = +kirgizdi.value;
  let pulingizvalue = pulingiz.value;
  let aylandivalue = aylandi.value;
  let h2 = document.querySelector("h2");
  if (input < 0.1) {
    alert("Iltimos input 0dan katta bolsin");
  } else if (pulingizvalue === "usd" && aylandivalue === "rub") {
    let chqadi = input * 69.99;
    h2.textContent = `${input} Usd = ${chqadi} Rubl`;
  } else if (pulingizvalue === "usd" && aylandivalue === "uzs") {
    let chqadi = input * 11241.92;
    h2.textContent = `${input} Usd = ${chqadi} Uzs`;
  } else if (pulingizvalue === "usd" && aylandivalue === "euro") {
    let chqadi = input * 0.95;
    h2.textContent = `${input} Usd = ${chqadi} Eur`;
  } else if (pulingizvalue === "rub" && aylandivalue === "usd") {
    let chqadi = input * 0.01;
    h2.textContent = `${input} Rubl = ${chqadi} Usd`;
  } else if (pulingizvalue === "rub" && aylandivalue === "uzs") {
    let chqadi = input * 178.54;
    h2.textContent = `${input} Rubl = ${chqadi} Uzs`;
  } else if (pulingizvalue === "rub" && aylandivalue === "euro") {
    let chqadi = input * 0.01;
    h2.textContent = `${input} Rubl = ${chqadi} Eur`;
  } else if (pulingizvalue === "uzs" && aylandivalue === "rub") {
    let chqadi = input * 0.0056;
    h2.textContent = `${input} Uzs = ${chqadi} Rubl`;
  } else if (pulingizvalue === "uzs" && aylandivalue === "euro") {
    let chqadi = input * 0.000084;
    h2.textContent = `${input} Uzs = ${chqadi} Eur`;
  } else if (pulingizvalue === "uzs" && aylandivalue === "usd") {
    let chqadi = input * 0.000088;
    h2.textContent = `${input} Uzs = ${chqadi} Usd`;
  } else if (pulingizvalue === "euro" && aylandivalue === "usd") {
    let chqadi = input * 1.04;
    h2.textContent = `${input} Eur = ${chqadi} Usd`;
  } else if (pulingizvalue === "euro" && aylandivalue === "uzs") {
    let chqadi = input * 11784.91;
    h2.textContent = `${input} Eur = ${chqadi} Uzs`;
  } else if (pulingizvalue === "euro" && aylandivalue === "rub") {
    let chqadi = input * 66.03;
    h2.textContent = `${input} Eur = ${chqadi} Rubl`;
  } else {
    alert(`Iltimos hamma narsani to'ldiring`);
    alert(`To'ldirgan bo'lsangiz pulni o'z valyutasiga convert qilmang`);
  }
});
