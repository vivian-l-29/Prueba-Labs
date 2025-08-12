import { banner } from "./componentes/banner/banner.js";
import { banner2 } from "./componentes/banner2/banner2.js";
import { bannerLogin } from "./componentes/bannerLogin/bannerLogin.js";

let contenedor = document.createElement("div");
document.body.appendChild(contenedor);

let banner1 = banner();
contenedor.appendChild(banner1);

let boton = banner1.querySelector(".banner-boton");
boton.addEventListener("click", () => {
    contenedor.innerHTML = ""; 
    let b2 = banner2();
    contenedor.appendChild(b2);

    let loginBtn = b2.querySelector(".login-boton");
    loginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        contenedor.innerHTML = "";
        contenedor.appendChild(bannerLogin());
    });

    let registerBtn = b2.querySelector(".register-boto");
    registerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        console.log("");
    });
});
