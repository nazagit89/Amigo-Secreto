// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
// Aquí deberás desarrollar la lógica para resolver el problema.

//Arreglo para almacenar los nombres de los amigos.
let amigos = [];

//Funciòn para agregar amigos
function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre');
        return;
    }

    amigos.push(nombre);

    document.getElementById('amigo').value = '';

    mostrarAmigos();

}

// Función para mostrar la lista de amigos
function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente antes de agregar nuevos elementos
    lista.innerHTML = '';

    // Iterar sobre el arreglo de amigos y agregar cada nombre como un elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo <li> para cada amigo
        const li = document.createElement('li');
        // Establecer el nombre del amigo como el texto del <li>
        li.textContent = amigos[i];
        // Agregar el <li> a la lista
        lista.appendChild(li); 
    }
}

// Función para sortear un amigo de manera aleatoria
function sortearAmigo() {
    // Validar que haya amigos disponibles en el arreglo
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para sortear.');
        return;
    }

    // Generar un índice aleatorio utilizando Math.random() y Math.floor()
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado utilizando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado del sorteo en el elemento correspondiente
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `¡El amigo sorteado es: ${amigoSorteado}!`;
}



