// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//variables

let amigos = [];

// Función para agregar un amigo al array
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    if (nombreAmigo.trim() !== '') {
        amigos.push(nombreAmigo);
        document.getElementById('amigo').value = '';
        
        // Llama a la función para mostrar la lista actualizada
        mostrarAmigos();
    } else {
        alert('Por favor, ingresa un nombre válido.');
    }
}

// Función para mostrar la lista de amigos en el HTML
function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpia la lista

    // Recorre el array amigos y agrega cada nombre como un elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

// Función para seleccionar un amigo de manera aleatoria
function sortearAmigo() {
    // Verifica que haya amigos en el array
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.'); // Mensaje si el array está vacío
        return;
    }

    // Genera un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Selecciona el amigo correspondiente al índice aleatorio
    let amigoSeleccionado = amigos[indiceAleatorio];

    // Actualiza el contenido del elemento de resultado
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `<li>El amigo secreto seleccionado es: ${amigoSeleccionado}</li>`;
}
