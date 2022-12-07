let container = document.querySelector(".container");
container.style = "display:flex;"

let columnas = (number) => {
  let columnaContainer = document.createElement("div"); 
  columnaContainer.style ="background-color: grey;"
 for (i = 1; i <= number; i++) {
    let cuadrado = document.createElement("div");
    cuadrado.style = "border: 1px solid black; height: 35px; width: 35px;"
    cuadrado.classList.add("cuadrado")
    columnaContainer.appendChild(cuadrado);
  };
  container.appendChild(columnaContainer)
}

let filas = (number) => {
  let i = 0;
  while (i < number) {
    columnas(number)
    i++
  }
}

filas(16);
