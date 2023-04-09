const API_URL =
  "https://api.steinhq.com/v1/storages/64224443d27cdd09f0eb1eac/21a3";

let tugas = "";
fetch(API_URL)
  .then(async (values) => await values.json())
  .then((value) => {
    value.forEach((ada) => {
      tugas += `
      <tr>
        <td>${ada["NO"]}</td>
        <td>${ada["NaMa"]}</td>
        <td>${ada["NIM"]}</td>
        <td>${ada["1"]}</td>
        <td>${ada["2"]}</td>
        <td>${ada["3"]}</td>
      </tr>
      `;
    });
    document.querySelector(".table-contents").innerHTML = tugas;
  });
