// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista con los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombre = inputAmigo.value.trim();

    if (nombre !== "" && !amigos.includes(nombre)) {
        amigos.push(nombre);

        // Mostrar la lista actualizada en el HTML
        actualizarListaAmigos();

        // Limpiar el input después de agregar
        inputAmigo.value = "";
    }
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar lista antes de actualizar

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear los amigos de manera aleatoria
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos dos amigos para realizar el sorteo.");
        return;
    }

    let sorteados = [...amigos]; // Clonar la lista para el sorteo
    let resultado = [];

    // Algoritmo para asignar amigos secretos sin repetirse
    for (let i = 0; i < amigos.length; i++) {
        let posibles = sorteados.filter(amigo => amigo !== amigos[i]);

        if (posibles.length === 0) {
            alert("No se pudo realizar el sorteo, intente de nuevo.");
            return;
        }

        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        resultado.push(`${amigos[i]} → ${elegido}`);
        sorteados.splice(sorteados.indexOf(elegido), 1);
    }

    // Mostrar el resultado en la interfaz
    let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = ""; // Limpiar antes de agregar nuevos resultados

    resultado.forEach(par => {
        let li = document.createElement("li");
        li.textContent = par;
        listaResultado.appendChild(li);
    });
}