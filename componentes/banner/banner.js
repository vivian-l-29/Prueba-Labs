export function banner() {
    let div = document.createElement('div');
    div.className = "banner";

    let span = document.createElement("span");
    span.textContent = "Geeta.";
    div.appendChild(span);

    let aBoton = document.createElement("a");
    aBoton.className = "banner-boton";

    // Construye basada en la ubicación actual
    const path = window.location.pathname;
    const base = path.substring(0, path.lastIndexOf('/')); // Carpeta actual
    aBoton.href = `${base}/pages/login/login.html`;

    aBoton.textContent = "SHOP NOW";
    div.appendChild(aBoton);

    return div;
}
