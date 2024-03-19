//alert("Hola este es mi Javascript");

let nombre = "Farid";

var nombre1 = "Farid";

const nombre2 = "Farid";

console.log(nombre);
console.log(nombre1);
console.log(nombre2);


let contenidoTitulo = "HTML semantico";

let titulo = document.querySelector("fas fa-heart");
titulo.innerHTML = "contenidoTitulo";


let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Nombre") {
    titulo.innerHTML = "otro";
} else {
    console.log("no se cumple")
}
