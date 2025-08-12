export function banner() {
    let div = document.createElement('div');
    div.className = "banner";

    let span = document.createElement("span");
    span.textContent = "Geeta.";
    div.appendChild(span);

    let aBoton = document.createElement("a");
    aBoton.className = "banner-boton"; 
    aBoton.href = "../pages/login/login.html";
    aBoton.textContent = "SHOP NOW";
    div.appendChild(aBoton);

    return div;
}