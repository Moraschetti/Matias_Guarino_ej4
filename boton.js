let btn = document.querySelector(".boton");

btn.forEach((boton) => {
  boton.addEventListener("click", mostrarCaja);
});
function mostrarCaja() {
  let caja = document.createElement("div");
  caja.appendChild(btn);
}
