/* eslint-disable */

import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excusa").innerHTML = crearExcusa();
  });
  console.log("Albert is replacing Rigo!");
};

let crearExcusa = () => {
  let pronombre = ["Un", "El", "Ese", "Este", "Aquel", "Otro"];
  let sujeto = [
    " comediante",
    " taxista",
    " patinador",
    " conserje",
    " feriante",
    " perro"
  ];
  let accion = [
    " se comió mis",
    " rompió mis",
    " perdió mis",
    " robó mis",
    " se fue con mis",
    " regalo mis"
  ];
  let objeto = [
    " deberes",
    " trabajos",
    " apuntes",
    " boletos",
    " zapatos",
    " pantalones"
  ];
  let sitio = [
    " en la calle",
    " en el teatro",
    " dónde nos conocimos",
    " debajo de la cama",
    " en mi casa"
  ];
  let cuando = [
    " durante el camino",
    " ayer",
    " esta tarde",
    " esta mañana",
    " ayer por la noche",
    " mientras estaba despistado",
    " mientras dormia",
    " al cruzar la calle"
  ];

  let pronombreIndex = Math.floor(Math.random() * pronombre.length);
  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let objetoIndex = Math.floor(Math.random() * objeto.length);
  let sitioIndex = Math.floor(Math.random() * sitio.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  return (
    pronombre[pronombreIndex] +
    "" +
    sujeto[sujetoIndex] +
    "" +
    accion[accionIndex] +
    "" +
    objeto[objetoIndex] +
    "" +
    sitio[sitioIndex] +
    "" +
    cuando[cuandoIndex]
  );
};
