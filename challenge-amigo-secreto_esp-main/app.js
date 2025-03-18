const entradaAmigo = document.getElementById ("amigo");
const listaAmigos = [];
const entradaListaAmigos = document.getElementById ("listaAmigos");
const salidaResultado = document.getElementById ("resultado")

function agregarAmigo(){
    if (entradaAmigo.value === ""){
        alert("Ingrese un nombre");
        return;
    }
    listaAmigos.push(entradaAmigo.value);
    entradaListaAmigos.innerHTML += `<li>${entradaAmigo.value.trim()}</li>`;
    entradaAmigo.value = "";
};



function sortearAmigo(){
    if (listaAmigos.length === 0){
        alert("No hay amigos para sortear. Primero agrega un nombre a la lista.");
        return;
    }

    const randomizer = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[randomizer];
    salidaResultado.innerHTML = `<li>Tu amigo secreto es: ${amigoSorteado}</li>`;
    listaAmigos.splice(randomizer, 1);
    actualizarListaAmigos();
    entradaAmigo.value = "";

}

function actualizarListaAmigos() {
    entradaListaAmigos.innerHTML = "";
    listaAmigos.forEach(amigo => {
        entradaListaAmigos.innerHTML += `<li>${amigo}</li>`;
    });
}