// let divDolar = document.getElementById("divDolar");

// fetch("https://criptoya.com/api/dolar")
//   .then((response) => response.json())

//   .then((data) => {
//     console.log(data);

//     //los guardo desestructurados
//     let { blue, oficial, ccl, mep, ccb, solidario } = data;

//     divDolar.innerHTML = `

//     <p>Oficial: ${oficial}</p>
//     <p>blue: ${blue}</p>
//     <p>ccl: ${ccl}</p>
//     <p>mep: ${mep}</p>
//     <p>ccb: ${ccb}</p>
//     <p>solidario: ${solidario}</p>
//     `;
//   });

const app = document.getElementById("divDolar");

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    data.forEach((usuario) => {
      // divDolar.innerHTML += `
      // <p>${usuario.name} ${usuario.id}</p>
      // `;
      const p = document.createElement("p");
      p.setAttribute("id", usuario.id);
      p.innerHTML = usuario.name;
      p.addEventListener("click", function () {
        window.location.href = `./usuarios.html?id=${usuario.id}`;
      });
      app.appendChild(p);
    });
  });
