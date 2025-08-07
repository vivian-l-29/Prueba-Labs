export function bannerLogin() {
  let fondo = document.createElement('div');
  fondo.className = "login-fondo"; 

  let titulo = document.createElement('div');
  titulo.className = "login-titulo";
  titulo.textContent = "Welcome Back!";

  let descripcion = document.createElement('div');
descripcion.className = "login-descripcion";

descripcion.appendChild(document.createTextNode("Yay! You're back! Thanks for shopping with us."));
descripcion.appendChild(document.createElement('br')); 
descripcion.appendChild(document.createTextNode("We have excited deals and promotions going"));
descripcion.appendChild(document.createElement('br')); 
descripcion.appendChild(document.createTextNode("on, grab your pick now!"));

let sub = document.createElement('div');
sub.className = "log-in";
sub.textContent = "LOG IN";

  let campoEmail = document.createElement('div');
  campoEmail.className = "campo";
  campoEmail.textContent = "Email address";

  let campoPass = document.createElement('div');
  campoPass.className = "campo-pass";
  campoPass.textContent = "hlo@geeta.co";

  let campoPassw = document.createElement('div');
  campoPassw.className = "pass";
  campoPassw.textContent = "Password";

  let campoPassd = document.createElement('div');
  campoPassd.className = "passd";
  campoPassd.textContent = "Enter you password";

  // Texto recordar / olvidar
  let recordar = document.createElement('div');
  recordar.className = "recordar";
  let recordarTexto = document.createElement('span');
  recordarTexto.textContent = "Remember me";
  let linkOlvido = document.createElement('a');
  linkOlvido.href = "#";
  linkOlvido.textContent = "Forgot Password?";
  recordar.appendChild(recordarTexto);
  recordar.appendChild(linkOlvido);

  // Botón
  let boton = document.createElement('div');
  boton.className = "boton-falso";
  boton.textContent = "LOG IN";

  // Registro
  let registrar = document.createElement('div');
  registrar.className = "registrar";
  let registrarTexto = document.createTextNode("Not registered yet? ");
  let registrarLink = document.createElement('a');
  registrarLink.href = "#";
  registrarLink.textContent = "Create an Account";
  registrar.appendChild(registrarTexto);
  registrar.appendChild(registrarLink);

  fondo.appendChild(titulo);
  fondo.appendChild(sub);
  fondo.appendChild(descripcion);
  fondo.appendChild(campoEmail);
  fondo.appendChild(campoPass);
  fondo.appendChild(campoPassw);
  fondo.appendChild(campoPassd);
  fondo.appendChild(recordar);
  fondo.appendChild(boton);
  fondo.appendChild(registrar);

  return fondo;
}
