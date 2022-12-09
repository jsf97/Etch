let container = document.querySelector(".container");
container.style = "display:flex;"
let manyGrids = document.querySelector(".many-divs");
let clean = document.querySelector(".clean")

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
        caja.style = `background-color: rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)});`
      })
      clean.addEventListener('click', () => {
        caja.style = 'background-color: white;'
      }) 
    }
  }
}
 manyGrids.addEventListener('click', (e) => {
   let cantidad = prompt("De cuantas grillas querés?")
   container.textContent = ""
   grid(cantidad);
 })

