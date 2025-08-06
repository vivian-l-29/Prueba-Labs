import { banner } from "./componentes/banner/banner.js";
import { banner2 } from "./componentes/banner2/banner2.js";

const contenedor = document.createElement("div");
document.body.appendChild(contenedor);

let banner1 = banner();
contenedor.appendChild(banner1);

let boton = banner1.querySelector(".banner-boton");
boton.addEventListener("click", (e) => {
    e.preventDefault(); 
    contenedor.innerHTML = ""; 
    contenedor.appendChild(banner2());
});
