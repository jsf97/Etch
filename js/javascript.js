let container = document.querySelector(".container");
container.style = "display:flex;"


let grid = (number) => {
  for (i = 0; i < number; i++) {
    let boxContainer = document.createElement("div")
    boxContainer.classList.add("boxContainer"); 
    container.appendChild(boxContainer);
    for (j = 0; j < number; j++) {
      let caja = document.createElement("div");
      caja.classList.add("caja")
      boxContainer.appendChild(caja)
      caja.addEventListener('mouseover', (e) => {
        caja.style = 'background-color: red'
      })
    }
  }
}

grid(16)
