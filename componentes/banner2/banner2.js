export function banner2() {
    let div = document.createElement('div');
    div.className = "banner2";

    let logo = document.createElement("span");
    logo.className = "logo";
    logo.textContent = "Geeta.";
    div.appendChild(logo);

    let titulo = document.createElement("h1");
    titulo.className = "titulo";

    let linea1 = document.createElement("span");
    linea1.textContent = "Create your fashion";

    let linea2 = document.createElement("span");
    linea2.textContent = "in your own way";

    titulo.appendChild(linea1);
    titulo.appendChild(document.createElement("br")); 
    titulo.appendChild(linea2);

    div.appendChild(titulo);

    let subtitulo = document.createElement("p");
    subtitulo.className = "subtitulo";
    subtitulo.textContent = "Each men and women has their own style, Geeta help you to create your unique style.";
    div.appendChild(subtitulo);

    // Botón LOG IN
    let loginBoton = document.createElement("div");
    loginBoton.href = "../../pages/login/login.html";
    loginBoton.className = "login-boton";
    loginBoton.textContent = "LOG IN";
    div.appendChild(loginBoton);

    // Separador "OR"
    let separator = document.createElement("div");
    separator.className = "separator";

    let lineLeft = document.createElement("div");
    lineLeft.className = "separator-line";
    separator.appendChild(lineLeft);

    let orText = document.createElement("span");
    orText.className = "separator-text";
    orText.textContent = "OR";
    separator.appendChild(orText);

    let lineRight = document.createElement("div");
    lineRight.className = "separator-line";
    separator.appendChild(lineRight);

    div.appendChild(separator);

    // Botón REGISTER
    let registerBoton = document.createElement("div");
    registerBoton.href = "#";
    registerBoton.className = "register-boton";
    registerBoton.textContent = "REGISTER";
    div.appendChild(registerBoton);

    return div;
}
