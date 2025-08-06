export function banner() {
    let div = document.createElement('div');
    div.className = "banner";

    let span = document.createElement("span");
    span.textContent = "Geeta.";
    div.appendChild(span);

    let aBoton = document.createElement("a");
    aBoton.className = "banner-boton"; 
    aBoton.textContent = "SHOP NOW";
    aBoton.href = "#";

    div.appendChild(aBoton);

    return div;
}
